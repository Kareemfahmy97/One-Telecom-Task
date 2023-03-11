import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { IComment } from 'src/app/Interfaces/icomment';
@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent implements OnInit {
  commentsList: IComment[] = [];
  singleComment: IComment;
  currentUrl: string;
  constructor(private fetchApi: GenericApiFetcher, private router: Router) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {
    // View All Comments
    this.fetchApi
      .genericFetchFunc<IComment[]>('get', 'comments', {})
      .subscribe((comment) => {
        this.commentsList = comment;
      });
  }

  deleteComment(commentId: number) {
    this.fetchApi
      .genericFetchFunc<IComment>('delete', 'comments', {}, commentId)
      .subscribe((comment) => {
        this.commentsList = this.commentsList.filter(
          (comment) => comment.id !== commentId
        );
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from 'src/app/Interfaces/icomment';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';

@Component({
  selector: 'app-control-comment',
  templateUrl: './control-comment.component.html',
  styleUrls: ['./control-comment.component.css'],
})
export class ControlCommentComponent implements OnInit {
  commentsList: IComment[] = [];
  currentUrl: string;
  addClicked: boolean = false;
  whichMode: string;
  itemToEdit: IComment = {} as IComment;
  constructor(private fetchApi: GenericApiFetcher, private router: Router) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {
    this.fetchApi
      .genericFetchFunc<IComment[]>('get', 'comments', {})
      .subscribe((comment) => {
        this.commentsList = comment;
      });
  }
  editComment(commentId: number) {
    this.fetchApi
      .genericFetchFunc<IComment[]>('patch', 'comments', {})
      .subscribe((comment) => {
        this.commentsList = comment;
      });
  }

  addComment() {
    this.addClicked = !this.addClicked;
    this.whichMode = 'Add';
    // this.addMode = true;
  }
  editItem(editedComment: IComment) {
    this.addClicked = !this.addClicked;
    this.whichMode = 'Edit';
    this.itemToEdit = editedComment;
  }
  updateMyTable(updateMyTable: IComment) {
    if (this.whichMode == 'Add') {
      this.commentsList.push(updateMyTable);
    }
    if (this.whichMode === 'Edit') {
      this.commentsList.map((item) =>
        item.id === updateMyTable.id ? (item = updateMyTable) : ''
      );
    }
  }
}

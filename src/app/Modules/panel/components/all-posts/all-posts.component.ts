import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { IPost } from 'src/app/Interfaces/ipost';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
  postsList: IPost[] = [];
  singlePost: IPost;
  currentUrl: string;
  constructor(private fetchApi: GenericApiFetcher, private router: Router) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {
    // View All Comments
    this.fetchApi
      .genericFetchFunc<IPost[]>('get', 'posts', {})
      .subscribe((post) => {
        this.postsList = post;
      });
  }

  deletePost(postId: number) {
    this.fetchApi
      .genericFetchFunc<IPost>('delete', 'posts', {}, postId)
      .subscribe((post) => {
        this.postsList = this.postsList.filter(
          (comment) => comment.id !== postId
        );
      });
  }
}

import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { IPost } from './../../../../Interfaces/ipost';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-post',
  templateUrl: './control-post.component.html',
  styleUrls: ['./control-post.component.css'],
})
export class ControlPostComponent implements OnInit {
  postsList: IPost[] = [];
  currentUrl: string;
  addClicked: boolean = false;
  postModeAddorEdit: string;
  recievedPostEdit: IPost = {} as IPost;
  constructor(private fetchApi: GenericApiFetcher, private router: Router) {
    this.currentUrl = this.router.url;
  }
  ngOnInit(): void {
    this.fetchApi
      .genericFetchFunc<IPost[]>('get', 'posts', {})
      .subscribe((post) => {
        this.postsList = post;
      });
  }

  editPost(commentId: number) {
    this.fetchApi
      .genericFetchFunc<IPost[]>('patch', 'posts', {})
      .subscribe((post) => {
        this.postsList = post;
      });
  }

  addPost() {
    this.addClicked = !this.addClicked;
    this.postModeAddorEdit = 'Add';
    // this.addMode = true;
  }
  editItem(editedPost: IPost) {
    this.addClicked = !this.addClicked;
    this.postModeAddorEdit = 'Edit';
    this.recievedPostEdit = editedPost;
  }
  updatePostsTable(updateMyTable: IPost) {
    if (this.postModeAddorEdit == 'Add') {
      this.postsList.push(updateMyTable);
    }
    if (this.postModeAddorEdit === 'Edit') {
      this.postsList.map((item) =>
        item.id === updateMyTable.id ? (item = updateMyTable) : ''
      );
    }
  }
}

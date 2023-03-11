import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/Interfaces/ipost';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  newPost: IPost = {} as IPost;
  @Output() newItemPostEvent = new EventEmitter<IPost>();
  @Input() editModeOrAdd: string;
  @Input() newPostEdit: IPost;
  constructor(private apiCall: GenericApiFetcher, private route: Router) {
    
  }

  ngOnInit(): void {
    if (this.newPostEdit) this.newPost = this.newPostEdit;
  }
  callApi() {
    this.editModeOrAdd === 'Add' ? this.addPost() : this.editPost();
  }
  addPost() {
    this.apiCall
      .genericFetchFunc('post', 'posts', {}, undefined, this.newPost)
      .subscribe((item) => {
        this.addNewItem(item as IPost);

        alert('Post added successfully');
        this.newPost = {} as IPost;
      });
  }

  editPost() {
    this.apiCall
      .genericFetchFunc('put', 'posts', {}, this.newPost.id, this.newPost)
      .subscribe((item) => {
        this.addNewItem(item as IPost);

        alert('Post Edited successfully');
        this.newPost = {} as IPost;
      });
  }
  addNewItem(post: IPost) {
    this.newItemPostEvent.emit(post);
  }
}

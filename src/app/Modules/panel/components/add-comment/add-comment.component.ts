import { Router } from '@angular/router';
import { IComment } from 'src/app/Interfaces/icomment';
import { GenericApiFetcher } from 'src/app/Services/api-fetcher.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  @Output() newItemEvent = new EventEmitter<IComment>();
  newComment: IComment = {} as IComment;
  @Input() closeTable: boolean;
  @Input() editOrAdd: string;
  @Input() commentToEdit: IComment;
  constructor(private apiCall: GenericApiFetcher, private route: Router) {}

  ngOnInit(): void {
    if (this.commentToEdit) this.newComment = this.commentToEdit;
  }
  callApi() {
    this.editOrAdd === 'Add' ? this.addComment() : this.editComment();
  }
  addComment() {
    this.apiCall
      .genericFetchFunc('post', 'comments', {}, undefined, this.newComment)
      .subscribe((item) => {
        this.addNewItem(item as IComment);

        // Want to handle this part with observer below to make it more generic
        alert('Comment added successfully');
        this.newComment = {} as IComment;
      });
  }

  editComment() {
    this.apiCall
      .genericFetchFunc(
        'put',
        'comments',
        {},
        this.newComment.id,
        this.newComment
      )
      .subscribe((item) => {
        this.addNewItem(item as IComment);

        alert('Comment Edited successfully');
        this.newComment = {} as IComment;
      });
  }
  addNewItem(comment: IComment) {
    this.newItemEvent.emit(comment);
  }
}

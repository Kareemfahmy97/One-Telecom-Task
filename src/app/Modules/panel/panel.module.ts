import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel.component';
import { ControlPostComponent } from './components/control-post/control-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { ControlCommentComponent } from './components/control-comment/control-comment.component';
import { PanelLandingComponent } from './components/panel-landing/panel-landing.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';

@NgModule({
  declarations: [
    PanelComponent,
    ControlCommentComponent,
    ControlPostComponent,
    PanelLandingComponent,
    CommentDetailsComponent,
    PostDetailsComponent,
    AllCommentsComponent,
    AllPostsComponent,
    AddCommentComponent,
    AddPostComponent,
    EditCommentComponent,
  ],
  imports: [CommonModule, PanelRoutingModule, FormsModule],
})
export class PanelModule {}

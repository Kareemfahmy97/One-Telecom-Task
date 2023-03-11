import { AddPostComponent } from './components/add-post/add-post.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PanelLandingComponent } from './components/panel-landing/panel-landing.component';
import { ControlPostComponent } from './components/control-post/control-post.component';
import { NotFoundComponent } from './../../Components/not-found/not-found.component';
import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlCommentComponent } from './components/control-comment/control-comment.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'posts',
        component: PanelLandingComponent,
        children: [
          { path: 'all', component: AllPostsComponent },
          { path: 'all/:pstId', component: PostDetailsComponent },
          { path: 'control', component: ControlPostComponent },
          { path: 'control/add', component: AddPostComponent },
        ],
      },
      {
        path: 'comments',
        component: PanelLandingComponent,
        children: [
          { path: 'all', component: AllCommentsComponent },
          { path: 'all/:comId', component: CommentDetailsComponent },
          { path: 'control', component: ControlCommentComponent },
          { path: 'control/add', component: AddCommentComponent },
        ],
        // children: [
        //   { path: 'all', component: AllCommentsComponent },
        //   { path: 'control', component: ControlCommentsComponent },
        //   {
        //     path: '**',
        //     component: NotFoundComponent,
        //   },
        // ],
      },
    ],
  },

  // {
  //   path: 'posts',
  //   component: PostsListComponent,

  //   // children: [
  //   //   { path: 'all', component: AllPostsComponent },
  //   //   { path: 'control', component: ControlPostComponent },
  //   //   {
  //   //     path: '**',
  //   //     component: NotFoundComponent,
  //   //   },
  //   // ],
  // },
  // {
  //   path: 'comments',
  //   component: CommentsListComponent,
  //   children: [{ path: 'control', component: ControlCommentComponent }],
  //   // children: [
  //   //   { path: 'all', component: AllCommentsComponent },
  //   //   { path: 'control', component: ControlCommentsComponent },
  //   //   {
  //   //     path: '**',
  //   //     component: NotFoundComponent,
  //   //   },
  //   // ],
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}

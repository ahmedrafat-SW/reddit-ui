import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { SubredditDetailsComponent } from './subreddit/subreddit-details/subreddit-details.component';
import { ProfileComponent } from './auth/user/profile/profile.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';

const routes: Routes = [
  {
    path:"sign-up",
    component:SignupComponent, 
    title: "Sign Up" 
  },
  {
    path:"login", 
    component:LoginComponent, 
    title: "Log In"
  },
  {
    path: "user-profile",
    component: ProfileComponent,
    title: "Profile"
  },
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "subreddit-create",
    component: CreateSubredditComponent,
    title: "Subreddit"
  },
  {
    path: "subreddit-view",
    component: ViewSubredditComponent,
    title: "Subreddit"
  },
  {
    path: "subreddit-details",
    component: SubredditDetailsComponent,
    title: "subreddit-details"
  },
  {
    path: "post-create",
    component: CreatePostComponent,
    title: "Post"
  },
  {
    path: "post-view",
    component: ViewPostComponent,
    title: "Post"
  },
  {
    path: "post-details/:id",
    component: PostDetailsComponent,
    title: "Post"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

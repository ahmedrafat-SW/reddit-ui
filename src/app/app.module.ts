import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { ViewVoteComponent } from './vote/view-vote/view-vote.component';
import { ViewCommentComponent } from './comment/view-comment/view-comment.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { MatIconModule } from '@angular/material/icon';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { SubredditDetailsComponent } from './subreddit/subreddit-details/subreddit-details.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './auth/user/profile/profile.component'
import {MatTabsModule} from '@angular/material/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ViewPostComponent,
    CreatePostComponent,
    ViewSubredditComponent,
    CreateSubredditComponent,
    ViewVoteComponent,
    ViewCommentComponent,
    CreateCommentComponent,
    PostDetailsComponent,
    SubredditDetailsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    MatMenuModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
    EditorModule,
    AngularEditorModule,
    FontAwesomeModule,
    MatTabsModule,
    BsDropdownModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

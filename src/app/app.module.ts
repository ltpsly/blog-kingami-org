import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MarkdownModule } from 'ngx-markdown';

import { config } from './app.config';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/shared/components/navbar/navbar.component';
import { AboutComponent } from './main/shared/components/about/about.component';
import { FooterComponent } from './main/shared/components/footer/footer.component';
import { BlogHomeComponent } from './main/blog/blog-home/blog-home.component';
import { BlogPostComponent } from './main/blog/blog-post/blog-post.component';
import { BlogListComponent } from './main/blog/blog-list/blog-list.component';
import { ErrorComponent } from './main/shared/components/error/error.component';
import { WelcomeComponent } from './main/shared/components/modals/welcome/welcome.component';
import { BlogCommentComponent } from './main/blog/blog-comment/blog-comment.component';
import { FormatterPipe } from './main/shared/pipes/formatter.pipe';
import { BlogCommentFormComponent } from './main/blog/blog-comment-form/blog-comment-form.component';
import { SubscribeComponent } from './main/shared/components/subscribe/subscribe.component';
import { ApiService } from './main/shared/services/api.service';
import { BlogService } from './main/shared/services/blog.service';
import { BlogMainComponent } from './main/blog/blog-main/blog-main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: BlogHomeComponent, children: [
    { path: '', component: BlogMainComponent, pathMatch: 'full' },
    { path: ':post', component: BlogPostComponent }
  ]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    BlogHomeComponent,
    BlogPostComponent,
    BlogListComponent,
    ErrorComponent,
    WelcomeComponent,
    BlogCommentComponent,
    FormatterPipe,
    BlogCommentFormComponent,
    SubscribeComponent,
    BlogMainComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config, config.projectId),
    AngularFirestoreModule.enablePersistence(),
    MarkdownModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

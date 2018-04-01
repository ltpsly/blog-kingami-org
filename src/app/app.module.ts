import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './main/shared/components/navbar/navbar.component';
import { AppRoutesModule } from './app-routes.module';
import { UserComponent } from './main/user/user.component';
import { BlogComponent } from './main/blog/blog.component';
import { AboutComponent } from './main/shared/components/about/about.component';
import { NextComponent } from './main/shared/components/next/next.component';
import { FooterComponent } from './main/shared/components/footer/footer.component';
import { BlogHomeComponent } from './main/blog/blog-home/blog-home.component';
import { BlogPostComponent } from './main/blog/blog-post/blog-post.component';
import { BlogListComponent } from './main/blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    BlogComponent,
    AboutComponent,
    NextComponent,
    FooterComponent,
    BlogHomeComponent,
    BlogPostComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

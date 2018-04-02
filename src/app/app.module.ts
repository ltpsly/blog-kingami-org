import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavbarComponent } from './main/shared/components/navbar/navbar.component';
import { AppRoutesModule } from './app-routes.module';
import { UserComponent } from './main/user/user.component';
import { AboutComponent } from './main/shared/components/about/about.component';
import { NextComponent } from './main/shared/components/next/next.component';
import { FooterComponent } from './main/shared/components/footer/footer.component';
import { BlogHomeComponent } from './main/blog/blog-home/blog-home.component';
import { BlogPostComponent } from './main/blog/blog-post/blog-post.component';
import { BlogListComponent } from './main/blog/blog-list/blog-list.component';
import { ErrorComponent } from './main/shared/components/error/error.component';
import { WelcomeComponent } from './main/shared/components/modals/welcome/welcome.component';
import { DeleteComponent } from './main/shared/components/modals/delete/delete.component';
import { ConfirmComponent } from './main/shared/components/modals/confirm/confirm.component';
import { BlogModule } from './main/blog/blog.module';
import { BlogSidebarComponent } from './main/blog/blog-sidebar/blog-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    AboutComponent,
    NextComponent,
    FooterComponent,
    BlogHomeComponent,
    BlogPostComponent,
    BlogListComponent,
    ErrorComponent,
    WelcomeComponent,
    DeleteComponent,
    ConfirmComponent,
    BlogSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

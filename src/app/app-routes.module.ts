import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { UserComponent } from './main/user/user.component';
import { AboutComponent } from './main/shared/components/about/about.component';
import { NextComponent } from './main/shared/components/next/next.component';
import { BlogHomeComponent } from './main/blog/blog-home/blog-home.component';
import { BlogPostComponent } from './main/blog/blog-post/blog-post.component';
import { BlogListComponent } from './main/blog/blog-list/blog-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: BlogHomeComponent, children: [
    { path: '', component: BlogListComponent },
    { path: ':post', component: BlogPostComponent }
  ]},
  { path: 'me', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'next', component: NextComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }

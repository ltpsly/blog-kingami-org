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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    BlogComponent,
    AboutComponent,
    NextComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

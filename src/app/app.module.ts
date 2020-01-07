import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogViewerComponent } from './blog-viewer/blog-viewer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {TopicsComponent} from './topics/topics.component';
import {NotFoundComponent} from './notfound/not-found.component';
import {BlogResolver} from './resolvers/BlogResolver';
import {ContributorsComponent} from "./contributors/contributors.component";


@NgModule({
  declarations: [
    AppComponent,
    BlogViewerComponent,
    HomeComponent,
    TopicsComponent,
    NotFoundComponent,
    ContributorsComponent
  ],
  exports: [ContributorsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [BlogResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogViewerComponent} from './blog-viewer/blog-viewer.component';
import {HomeComponent} from './home/home.component';
import {TopicsComponent} from './topics/topics.component';
import {NotFoundComponent} from './notfound/not-found.component';
import {BlogResolver} from './resolvers/BlogResolver';


const routes: Routes = [ {path: 'blog/:name', resolve: {blog: BlogResolver}, component: BlogViewerComponent} ,
  {path: 'topics', component: TopicsComponent}, {path: '',   pathMatch: 'full', component: HomeComponent},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

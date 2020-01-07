import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Topic} from '../Interfaces/topic.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-viewer.component.html',
  styleUrls: ['./blog-viewer.component.css']
})
export class BlogViewerComponent {
  topic: Topic = null;
  markdownFileLink: string = null;
  constructor(route: ActivatedRoute, router: Router) {
    this.topic = route.snapshot.data.blog;
    this.markdownFileLink = environment.markdownFilesPrefixUrl + '/' + this.topic.relativeMarkdownUrl;
  }

}

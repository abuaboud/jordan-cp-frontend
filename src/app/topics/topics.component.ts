import { Component } from '@angular/core';
import AllCategories from '../../assets/config/all-categories.json';
import {Category} from '../Interfaces/category.interface';


@Component({
  selector: 'app-blog-viewer',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})


export class TopicsComponent {

   allCategories: Category[] = AllCategories;

}

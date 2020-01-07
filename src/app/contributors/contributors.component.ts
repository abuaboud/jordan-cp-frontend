import {Component, NgModule} from '@angular/core';
import AllContributors from "../../assets/config/all-contributors.json";
import {Contributor} from "../Interfaces/contributor.interface";

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent {

  allContributors: Contributor[] = AllContributors;
}

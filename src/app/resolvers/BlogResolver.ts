import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import AllCategories from '../../assets/config/all-categories.json';

@Injectable()
export class BlogResolver implements Resolve<null> {
    constructor(private router: Router) {}

    public resolve(route: ActivatedRouteSnapshot, router) {
      let targetTopic = null;
      const topicName: string = route.params.name;
      for (const category of AllCategories ) {
        for (const topic of category.topics) {
          if (topic.name.toLowerCase().replace(/ /g, '_') === topicName.toLowerCase()) {
            targetTopic = topic;
          }
        }
      }
      if ( targetTopic === null) {
          this.router.navigate(['/error404']);
      }
      return targetTopic;
    }
}

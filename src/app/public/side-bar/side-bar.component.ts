import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTE_TYPE, ROUTE_MAP, TYPE_TITLE_MAP } from '../route/route.domain';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  title = 'Notes of Angular v12';
  updateTime = '2023/12/29';
  selectedRoute = ROUTE_TYPE.HOME;
  route: string;

  sideBarList = [
    ROUTE_TYPE.MIGRATIONS,
    ROUTE_TYPE.BREAKING_CHANGE,
    ROUTE_TYPE.DEPRECATIONS,
    ROUTE_TYPE.DOCUMENTS,
    ROUTE_TYPE.I18N_TRANSITION,
    ROUTE_TYPE.NULLISH_COALESCING,
    ROUTE_TYPE.STYLISH_IMPROVEMENTS,
    ROUTE_TYPE.STRICT_MODE,
    ROUTE_TYPE.LANGUAGE_SERVICE,
    ROUTE_TYPE.NOTES,
    ROUTE_TYPE.LEARNING_RESOURCE,
    ROUTE_TYPE.TODO
  ];

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        this.route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(this.route) || ROUTE_TYPE.HOME;
      } else {
        this.route = 'Home';
      }
    });
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: ROUTE_TYPE) {
    console.log(type)
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    console.log(path)
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}

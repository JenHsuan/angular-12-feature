import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTE_TYPE, ROUTE_MAP, TYPE_TITLE_MAP, sideBarList } from '../route/route.domain';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  title = 'Notes of Angular v12';
  selectedRoute = ROUTE_TYPE.HOME;
  
  sideBarList = sideBarList;

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        let route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(route) || ROUTE_TYPE.HOME;
      }
    });
  }

  getRouteStyle(type: ROUTE_TYPE) {
    return this.selectedRoute === type ? 'tab-item current' : 'tab-item';
  }

  changeRoute(type: ROUTE_TYPE) {
    const path  = [...ROUTE_MAP.keys()].find(key => type === ROUTE_MAP.get(key));
    if (path) {
      this.router.navigate([path]);
    } 
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}

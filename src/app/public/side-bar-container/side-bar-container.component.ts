import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTE_TYPE, ROUTE_MAP, TYPE_TITLE_MAP, sideBarList } from '../route/route.domain';
import { ThemeType } from '../theme/domain/theme.damin';
import { ThemeService } from '../theme/service/theme.service';

@Component({
  selector: 'app-side-bar-container',
  templateUrl: './side-bar-container.component.html',
  styleUrls: ['./side-bar-container.component.scss']
})
export class SideBarContainerComponent {
  title = 'Notes of Angular v12';
  selectedRoute = ROUTE_TYPE.HOME;
  
  sideBarList = sideBarList;

  themeImageMap = new Map<ThemeType, string>([
    [ThemeType.light, "../assets/image/angular-logo.png"],
    [ThemeType.dark, "../assets/image/angular-logo-dark.png"]
  ]);
  currentImage: string = "";

  constructor(
    private location: Location, 
    private router: Router,
    private themeService: ThemeService
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        let route = `/${slices[1]}`;
        this.selectedRoute = ROUTE_MAP.get(route) || ROUTE_TYPE.HOME;
      }
    });

    this.themeService.theme$.subscribe(themeType => {
      let url = this.themeImageMap.get(themeType);
      if (url) {
        this.currentImage = url;
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

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ROUTE_MAP, ROUTE_TYPE, sideBarList } from '../route/route.domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button-container',
  templateUrl: './navigation-button-container.component.html',
  styleUrls: ['./navigation-button-container.component.scss']
})
export class NavigationButtonContainerComponent {
  sideBarList = sideBarList;
  currentRoute = '/home';

  @ViewChild("previous", {read: ElementRef}) previous: ElementRef | undefined;
  @ViewChild("next", {read: ElementRef}) next: ElementRef | undefined; 

  constructor(
    private location: Location, 
    private router: Router
  ) {
    router.events.subscribe(_ => {
      if(location.path() != ''){
        const slices = location.path().split('/');
        this.currentRoute = `/${slices[1]}`;
      }
    });
  }

  ngAfterViewInit() {
    const list = [...ROUTE_MAP.keys()];
    const index = list.findIndex(path => path === this.currentRoute);
    if (index - 1 >= 1) {
      this.previous?.nativeElement.classList.add("active");
    } else {
      this.previous?.nativeElement.classList.remove("active");
    }

    if (index + 1 < list.length) {
      this.next?.nativeElement.classList.add("active");
    } else {
      this.next?.nativeElement.classList.remove("active");
    }
  }

  previousPage() {
    const list = [...ROUTE_MAP.keys()];
    const index = list.findIndex(path => path === this.currentRoute);
    if (index - 1 >= 1) {
      const nextPage = list[index - 1];
      this.router.navigate([nextPage]);
    }
  }

  nextPage() {
    const list = [...ROUTE_MAP.keys()];
    const index = list.findIndex(path => path === this.currentRoute);
    if (index + 1 < list.length) {
      const nextPage = list[index + 1];
      this.router.navigate([nextPage]);
    }
  }
}

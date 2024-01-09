import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-debugging-list',
  templateUrl: './debugging-list.component.html',
  styleUrls: ['./debugging-list.component.scss']
})
export class DebuggingListComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEBUGGING_PLAYLIST);
  sectionTitles = [
    "Introduction",
    "1. Expression has changed after it was checked",
    "2. Circular dependency in DI detected",
    "3. NullInjectorError: No provider for Class",
    "Reference"
  ];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  err1ExampleTemplate1 = `
  <route-outlet>
    <span class="loader" *ngIf="loading">
  </route-outlet>
  `;

  err1ExampleComponent1 = `
  export class AppComponent {
    loading = true;
    ngAfterViewInit() {
      //Do not update the view here
      loading = false;
    }
  }
  `;

  err1ExampleComponentSolution1 = `
  export class AppComponent {
    loading = true;
    ngAfterViewInit() {
      //create a new setTimeOut
      setTimeOut(() => {
        loading = false;
      }, 0);

      //Or

      Promise.resolve().then(() => {
        loading = false;
      });
    }
  }
  `;

  err1ExampleComponentSolution2 = `
  import { ChangeDetectorRef } from '@angular/core';

  export class AppComponent {
    loading = true;
    constructor(private cd: ChangeDetectorRef){}

    ngAfterViewInit() {
      loading = false;
      this.cd.detectChanges();
    }
  }
  `;

  err2ExampleService = `
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    currentUser: string;

    constructor(storageService: StorageService) { }
    
    ...
  }

  @Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    constructor(userService: UserService) { }

    writeUser() {
      localStorage.setItem("user", this.userService.currentUser);
    }

    ...
  }
  `

  err2ExampleSolution = `
  @Injectable({
    providedIn: 'root'
  })
  export class UserService {
    currentUser: string;

    constructor(storageService: StorageService) { }
    
    ...
  }

  @Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    constructor() { }

    writeUser(user: string) {
      localStorage.setItem("user", user);
    }

    ...
  }
  `

  rootProvider = `
  @Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    constructor() { }
  }
  `;

  featureProvider = `
  @Injectable({
    providedIn: FeatureModule
  })
  export class StorageService {
    constructor() { }
  }
  `;

  anyProvider = `
  @Injectable({
    providedIn: "any"
  })
  export class StorageService {
    constructor() { }
  }
  `;

  platformProvider = `
  @Injectable({
    providedIn: "platform"
  })
  export class StorageService {
    constructor() { }
  }
  `;

  importToAppModule = `
  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [],
    providers: [
      StorageService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `;
}

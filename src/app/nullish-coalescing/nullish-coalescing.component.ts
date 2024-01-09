import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-nullish-coalescing',
  templateUrl: './nullish-coalescing.component.html',
  styleUrls: ['./nullish-coalescing.component.scss']
})
export class NullishCoalescingComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NULLISH_COALESCING);
  sectionTitles = [
    "Introduction"
  ];
  age: number | null = null;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;


  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  calculateAge() {
    return 1;
  }

  legazyCode = `
  export class NullishCoalescingComponent {
    age: number | null = null;
    calculateAge() {
      return 1;
    }
  }

  <div class="item">
    {{age !== null && age !== undefined ? age : calculateAge() }}
  </div>
  `;

  newCode = `
  export class NullishCoalescingComponent {
    age: number | null = null;
    calculateAge() {
      return 1;
    }
  }

  <div class="item">
    {{ age ?? calculateAge() }}
  </div>
  `;
}

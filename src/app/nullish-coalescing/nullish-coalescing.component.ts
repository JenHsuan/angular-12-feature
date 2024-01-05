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

  age: number | null = null;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = [
    "Introduction"
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  calculateAge() {
    return 1;
  }

  legazyCode = `
  calculateAge() {
    return 1;
  }

  <div class="item">
    {{age !== null && age !== undefined ? age : calculateAge() }}
  </div>
  `;

  newCode = `
  calculateAge() {
    return 1;
  }
  
  <div class="item">
    {{ age ?? calculateAge() }}
  </div>
  `;
}

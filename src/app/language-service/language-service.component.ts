import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-language-service',
  templateUrl: './language-service.component.html',
  styleUrls: ['./language-service.component.scss']
})
export class LanguageServiceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.LANGUAGE_SERVICE);

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = [
    "Introduction",
    "Old Features",
    "New Feature",
    "Reference"
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}

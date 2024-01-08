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
    "New Feature",
    "Old Features",
    "Reference"
  ];

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}

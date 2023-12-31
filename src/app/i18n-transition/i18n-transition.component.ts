import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-i18n-transition',
  templateUrl: './i18n-transition.component.html',
  styleUrls: ['./i18n-transition.component.scss']
})
export class I18nTransitionComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.I18N_TRANSITION);
  sectionTitles = [
    "Introduction",
    "Reference"
  ];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  
  preparation = `
  ng add @angular/localize
  `;

  generateJson =  `
  ng extract-i18n --format=legacy-migrate
  `;

  migration = `
  npx localize-migrate --files=*.xlf --mapFile=messages.json
  `;

  zshSetUp = `
  sudo nano ~/.zshrc
  `;

  zshAdd = `
  setopt no_nomatch
  `;
}

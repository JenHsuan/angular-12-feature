import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-stylish-improvements',
  templateUrl: './stylish-improvements.component.html',
  styles: [`
    .inline-style-demo-btn {
      background-color: #ffffff;
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
  }`]
})
export class StylishImprovementsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STYLISH_IMPROVEMENTS);

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = ["Description", "Demo", "Reference"];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
  
  enableInlineStyle = `
  //Update angular.json (architect -> build -> options)

  "architect": {
    "build": {
      "options": {
        "inlineStyleLanguage": "scss",
  `;

  componentCode = `
  @Component({
    selector: 'app-stylish-improvements',
    templateUrl: './stylish-improvements.component.html',
    styles: [\`
      .inline-style-demo-btn {
        background-color: #ffffff;
        color: #1e90ff;
        border: 1px solid #1e90ff;
        padding: 5px;
    }\`]
  })
  `;

  htmlCode = `
  <div>
    <button class="inline-style-demo-btn">Demo</button>
  </div>`;
}

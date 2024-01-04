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
  }
  `, `
  .inline-style-demo-btn2 {
      background-color: #ffffff;
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
  }`]
})
export class StylishImprovementsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STYLISH_IMPROVEMENTS);
  titles = [
    "Introduction",
    "Reference"
  ];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

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
  //for single style
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

  //for multiple styles

  //this way
  @Component({
    selector: 'app-stylish-improvements',
    templateUrl: './stylish-improvements.component.html',
    styles: [\`
      .inline-style-demo-btn {
        background-color: #ffffff;
        color: #1e90ff;
        border: 1px solid #1e90ff;
        padding: 5px;
    }
    .inline-style-demo-btn2 {
      background-color: #ffffff;
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
    }\`]
  })

  //or this way
  @Component({
    selector: 'app-stylish-improvements',
    templateUrl: './stylish-improvements.component.html',
    styles: [\`
      .inline-style-demo-btn {
        background-color: #ffffff;
        color: #1e90ff;
        border: 1px solid #1e90ff;
        padding: 5px;
    }\`, \`
    .inline-style-demo-btn2 {
      background-color: #ffffff;
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
    }
    \`]
  })
  `;

  htmlCode = `
  <div>
    <button class="inline-style-demo-btn">Demo</button>
    <button class="inline-style-demo-btn2">Demo2</button>
  </div>`;

  sassPkg = `
  npm install --save sass
  `;

  update = `
  ng update
  `;

  example = `
  /**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  // Here's an example of the before and after.
  // BEFORE

  @import '~@angular/material/theming;
  @include mat-core();
  $primary: mat-palette($mat-indigo);
  $accent:  mat-palette($mat-pink);
  $theme: mat-light-theme((
    color: (
      primary: $primary,
      accent: $accent
    )
  ));
  @include angular-material-theme($theme);
  // AFTER
  @use '~@angular/material' as mat;
  @include mat.core();
  $primary: mat.define-palette(palette.$indigo-palette);
  $accent:  mat.define-palette(palette.$pink-palette);
  $theme: mat.define-light-theme((
    color: (
      primary: $primary,
      accent: $accent
    )
  ));
  @include mat.all-component-themes($theme);
  `;
}

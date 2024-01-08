import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-stylish-improvements',
  templateUrl: './stylish-improvements.component.html',
  styles: [`
    .inline-style-demo-btn {
      background-color: var(--background-default);
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
  }
  `, `
  .inline-style-demo-btn2 {
      background-color: var(--background-default);
      color: #1e90ff;
      border: 1px solid #1e90ff;
      padding: 5px;
  }`]
})
export class StylishImprovementsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STYLISH_IMPROVEMENTS);
  sectionTitles = [
    "Introduction",
    "Inline Sass in components",
    "Use new Sass API for Angular CDK and Angular Material code",
    "Introduction to TailwindCSS",
    "Use TailwindCSS in Angular",
    "Reference"
  ];
  titleList = [...TYPE_TITLE_MAP.values()].join(', ');

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){
  }

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  
  dark() {
    document.documentElement.classList.add("dark");
  }

  light() {

  document.documentElement.classList.remove("dark");
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

  //in this way
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

  //or in this way
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

  installTailwindCSS = `
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  `;

  initTailwindCSS = `
  npx tailwindcss init
  `;

  exampleTailwindCSS = `
  <!--
  top-[10px]: top: 10px;
  max-w-screen-md => max-width: 1rem (self-defined from theme)
  mt-3 => margin-top: 0.75rem; 
  mx-auto => margin-left: auto; margin-right: auto;
  bg-rose-950 => background-color: rgb(76 5 25)
  rounded-xl => border-radius: 0.75rem;
  md:max-w-screen-lg => media query
  hover:bg-gray-300 => psuedo class for hovering
  -->

  <div class="top-[10px] max-w-screen-md mt-3 mx-auto bg-rose-950 rounded-xl shadow-md overflow-hidden md:max-w-screen-lg hover:bg-gray-300">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="../../assets/image/angular-logo.png" alt="">
      </div>
      <div class="p-[8px]">
        <div class="uppercase py-3 text-6xl text-white font-semibold">
          Note of Angular 12
        </div>
        <h1 class="py-3 text-3xl font-bold text-red-600 mb-0">
          Produced by Jen-Hsuan Hsieh
        </h1>
        <p class="py-1 mb-0 text-gray-100">
          {{titleList}}
        </p>
      </div>
    </div>
  </div>`;

  updateStyle = `
  //It'll effect the global CSS style
  @import 'tailwindcss/base';

  @import 'tailwindcss/components';

  @import 'tailwindcss/utilities';
  `;

  originalConfig = `
  module.exports = {
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
  `;
  
  updatedConfig = `
  module.exports = {
    /* enable the JIT mode */
    mode: 'jit',
    
    /* 
     * Specify the files to be parsed
     * The JIT mode will only bundle the required files
     */
    content: ["./src/**/*.html", "./src/**/*.scss"],

    theme: {
      /*
       * override the screen width for the responsible design
       * usage: max-w-screen-md
       */
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1440px',
      },

      /*
       * override the rounded-xl
       * origin: 0.75rem
       * now: 1rem
       * 
       * usage: rounded-xl
       */
      borderRadius: {
        xl: '1rem',
      },

      /*
       * override the red-600
       * usage: text-red-600, bg-red-600
       */
      colors: {
        red: {
          ...defaultTheme.theme?.colors.red,
          600: "#E53935",
        },
      },
    },
    variants: {
      /*
       * enable the hover effect for the background color 
       * (we won't have to add this affter enabling the JIT mode)
       * usage: hover:bg-gray-300
       */
      extend: {
        backgroundColor: ['hover']
      },
    },
    plugins: [],
  }
  `;
}

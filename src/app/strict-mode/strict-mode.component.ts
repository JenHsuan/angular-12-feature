import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
//import { getName } from './demo/fileManager';

@Component({
  selector: 'app-strict-mode',
  templateUrl: './strict-mode.component.html',
  styleUrls: ['./strict-mode.component.scss']
})
export class StrictModeComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STRICT_MODE);

  data: number | undefined = 0;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = [
    "Introduction",
    "TypeScript Strict Mode",
    "Angular Compiler Flags",
    "Reference"
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
  forceConsistentCasingInFileNames = `
  compilerOptions.forceConsistentCasingInFileNames: true
  `;

  forceConsistentCasingInFileNamesErrorMessage = `
  //The real file name is FileManger.ts
  import { getName } from './demo/fileManager';
  //                      ~~~~~~~~~~~~~~~~~~~~ Error!
  // Already included file name '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/demo/fileManager.ts' differs from file name '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/demo/FileManager.ts' only in casing.
  // The file is in the program because:
  // Imported via './demo/fileManager' from file '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/strict-mode.component.ts'
  // Matched by default include pattern '**/*'ts(1261)
  `;

  noImplicitReturns = `
  compilerOptions.noImplicitReturns: true
  `;

  noImplicitReturnsErrorMessage = `
  export const getName = (isEnable: boolean) => {
  //                     ~~~~~~~~~~~~~~~~~~~~~~~~ Error!
  //Not all code paths return a value.ts(7030)
    if (isEnable) {
      return "demo"
    }
  };
  `;

  noFallthroughCasesInSwitch = `
  compilerOptions.noFallthroughCasesInSwitch: true
  `;

  noFallthroughCasesInSwitchErrorMessage = `
  const a: number = 6;
 
  switch (a) {
    case 0:
    //~~~~~ Error!
    //Fallthrough case in switch.ts(7029)
    console.log("even");
  case 1:
    console.log("odd");
    break;
  }`;

  strictTemplates = `
  angularCompilerOptions.strictTemplates: true
  `;

  strictTemplatesErrorMessage = `
  //child component
  @Component({
    selector: 'app-styict-mode-strict-template',
    templateUrl: './styict-mode-strict-template.component.html',
    styleUrls: ['./styict-mode-strict-template.component.scss']
  })
  export class StyictModeStrictTemplateComponent {
    @Input() data: number = 0;
  }

  //parent component
  export class StrictModeComponent {
    data: number | undefined = 0;
  }

  //parent template
  <div class="item">
    <app-styict-mode-strict-template 
      [data]="data">
      //~~~~~~~~~~ Error!
      //Type 'number | undefined' is not assignable to type 'number'.
      //Type 'undefined' is not assignable to type 'number'.ngtsc(2322)
    </app-styict-mode-strict-template>
  </div>
  `;

  strictInputAccessModifiers = `
  angularCompilerOptionsstrictInputAccessModifiers: true
  `;

  strictInputAccessModifiersErrorMessage = `
  //html
  <p>{{ data }}</p>
  //  ~~~~~~~~~~ Error!
  //Property 'data' is private and only accessible within class 'StyictModeStrictTemplateComponent'.ngtsc(2341)

  //component
  @Component({
    selector: 'app-styict-mode-strict-template',
    templateUrl: './styict-mode-strict-template.component.html',
    styleUrls: ['./styict-mode-strict-template.component.scss']
  })
  export class StyictModeStrictTemplateComponent {
    @Input() private data: number = 0;
  }
  `;
}

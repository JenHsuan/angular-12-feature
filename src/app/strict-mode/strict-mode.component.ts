import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
//import { getName } from './demo/fileManager';

@Component({
  selector: 'app-strict-mode',
  templateUrl: './strict-mode.component.html',
  styleUrls: ['./strict-mode.component.scss']
})
export class StrictModeComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.STRICT_MODE);

  data: number | undefined = 0;

  forceConsistentCasingInFileNames = `
  "forceConsistentCasingInFileNames": true
  `;

  forceConsistentCasingInFileNamesErrorMessage = `
  //The real file name is FileManger.ts
  import { getName } from './demo/fileManager';
  //                      ~~~~~~~~~~~~~~~~~~~~
  // Already included file name '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/demo/fileManager.ts' differs from file name '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/demo/FileManager.ts' only in casing.
  // The file is in the program because:
  // Imported via './demo/fileManager' from file '/Users/hsiehs/Practice/Angular12Project/src/app/strict-mode/strict-mode.component.ts'
  // Matched by default include pattern '**/*'ts(1261)
  `;

  noImplicitReturns = `
  "noImplicitReturns": true
  `;

  noImplicitReturnsErrorMessage = `
  export const getName = (isEnable: boolean) => {
  //                     ~~~~~~~~~~~~~~~~~~~~~~~~
  //Not all code paths return a value.ts(7030)
    if (isEnable) {
      return "demo"
    }
  };
  `;

  noFallthroughCasesInSwitch = `
  "noFallthroughCasesInSwitch": true
  `;

  noFallthroughCasesInSwitchErrorMessage = `
  const a: number = 6;
 
  switch (a) {
    case 0:
    //~~~~~
    //Fallthrough case in switch.ts(7029)
    console.log("even");
  case 1:
    console.log("odd");
    break;
  }`;

  strictTemplates = `
  "strictTemplates": true
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
      //~~~~~~~~~~
      //Type 'number | undefined' is not assignable to type 'number'.
      //Type 'undefined' is not assignable to type 'number'.ngtsc(2322)
    </app-styict-mode-strict-template>
  </div>
  `;

  strictInputAccessModifiers = `
  "strictInputAccessModifiers": true
  `;

  strictInputAccessModifiersErrorMessage = `
  //html
  <p>{{ data }}</p>
  //  ~~~~~~~~~~
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

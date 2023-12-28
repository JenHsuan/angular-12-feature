import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-breaking-changes',
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export class BreakingChangesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.BREAKING_CHANGE);
  escapeHtml = escapeHtml;

  upgardeRx = `
  npm install rxjs@7.4
  `;

  distIndex = `
  <!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>Angular 13</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <meta property="og:title" content="New features in Angular 13">
  <meta property="og:url" content="https://profound-kangaroo-9db0c6.netlify.app/">
  <meta property="og:image" content="https://raw.githubusercontent.com/JenHsuan/angular-13-feature/main/demo/screenshot.png">
  <meta property="og:description" content="Learn and test new features in Angular 13">
  <meta name="keywords" content="angular,javascript,feature,dynamic component,testing,cache">
  <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)">
  <style>body{margin:0}</style><link rel="stylesheet" href="styles.3164f3600d2890e4.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles.3164f3600d2890e4.css"></noscript></head>
  <body>
    <app-root></app-root>
  <script src="runtime.53d27497dc947bab.js" type="module"></script><script src="polyfills.79ba09efd856cfcd.js" type="module"></script><script src="main.047cf091c9c37ea8.js" type="module"></script>
  
  <!-- <script src="fancyModernBundle.js" type="module"></script>
  <script src="legacyBundle.js" nomodule></script> -->

  </body></html>
  `;

  typeguard = `
  //In previous versions of TypeScript, this would be an error - even though argIsString was assigned the value of a type guard, TypeScript simply lost that information. 
  function foo(arg: unknown) {
    const argIsString = typeof arg === "string";
    if (argIsString) {
      console.log(arg.toUpperCase());
      //              ~~~~~~~~~~~
      // Error! Property 'toUpperCase' does not exist on type 'unknown'.
    }
  }
  `;

  tsUnknown = `
  //The type of err will be unknown if we enable useUnknownInCatchVariables
  try {
    executeSomeThirdPartyCode();
  } catch (err) {
    // err: unknown
   
    // Error! Property 'message' does not exist on type 'unknown'.
    console.error(err.message);
   
    // Works! We can narrow 'err' from 'unknown' to 'Error'.
    if (err instanceof Error) {
      console.error(err.message);
    }
  }

  //solution
  try {
    executeSomeThirdPartyCode();
  } catch (err: any) {
    console.error(err.message); // Works again!
  }
  `;

  tsSymbol = `
  interface Colors {
    [sym: symbol]: number;
  }
   
  const red = Symbol("red");
  const green = Symbol("green");
  const blue = Symbol("blue");
   
  let colors: Colors = {};
   
  // Assignment of a number is allowed
  colors[red] = 255;
  let redVal = colors[red];
  `;

  tsStaticBlock = `
  //without static block
  class Foo {
    static bytes = createRandomBytes(4 * 1024);
    static fileBody = new FileBody(Foo.bytes);
  }

  function createRandomBytes(length: number) {
    const bytes = new Uint8Array(length);
    bytes.set(pseudoRandomBytes(bytes.length));
    return bytes;
  }

  //with static block
  class Foo {
    static bytes: Uint8Array = [];

    static {
      bytes.set(pseudoRandomBytes(bytes.length));
    }

    static fileBody = new FileBody(Foo.bytes);
  }
  `;

  moduleSyntax = `
  <script src="fancyModernBundle.js" type="module">
  `;

  moduleAsyncSyntax = `
  <script src="fancyModernBundle.js" type="module" async>
  `;
}

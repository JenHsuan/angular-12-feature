import { ChangeDetectorRef, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-breaking-changes',
  templateUrl: './breaking-changes.component.html',
  styleUrls: ['./breaking-changes.component.scss']
})
export class BreakingChangesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.BREAKING_CHANGE);
  sectionTitles = [
    "Introduction",
    "New Feature of TypeScript 4.2",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  smarterTypeAlias = `
  type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

  // Previously: { kind: "circle"; radius: number; | { kind: "square"; size: number; | { kind: "rectangle"; width: number; height: number; | undefined
  // Currently: Shape | undefined
  declare let optionalShape: Shape | undefined;
  `;

  restElems = `
  //declare a variable in the list type with the rest element 
  let foo: [...string[], number];

  foo = [123];
  foo = ["hello", 123];
  foo = ["hello!", "hello!", "hello!", 123];

  //declare a variable in the list type with the rest element
  let bar: [boolean, ...string[], boolean];

  bar = [true, false];
  bar = [true, "some text", false];
  bar = [true, "some", "separated", "text", false];

  interface Clown { /*...*/ }
  interface Joker { /*...*/ }

  let StealersWheel: [...Clown[], "me", ...Joker[]];
  //                                    ~~~~~~~~~~ Error!
  // A rest element cannot follow another rest element.

  let StringsAndMaybeBoolean: [...string[], boolean?];
  //                                        ~~~~~~~~ Error!
  // An optional element cannot follow a rest element.
  `;


  update = `
  //We can upgrade ngZone with the following command

  ng update
  `;

  noPropertyAccessFromIndexSignature = `
  compilerOptions.noPropertyAccessFromIndexSignature: true
  `;

  noPropertyAccessFromIndexSignatureErrorMessage = `
  class Color {
    r = 255;
    g = 255;
    b = 255;
  
    //index signature
    [key: string]: string | number;
  }
  
  const c = new Color();
  
  console.log(c.r, c.g, c.b);
  
  console.log(c.foo);
  //          ~~~~ Error!
  // Property 'foo' comes from an index signature, so it must be accessed with ['foo'].

  console.log(c["foo"]);
  `;

  unused = `
  let [_first, second] = getValues();
  `;

  abstractConstructSignaturesLegacy = `
  abstract class Shape {
    abstract getArea(): number;
  }
   
  interface HasArea {
    getArea(): number;
  }
   
  function makeSubclassWithArea(Ctor: new () => HasArea) {
    return class extends Ctor {
      getArea() {
        return 42
      }
    };
  }
   
  let MyShape = makeSubclassWithArea(Shape);
  //                                 ~~~~ Error!
  //Argument of type 'typeof Shape' is not assignable to parameter of type 'new () => HasArea'.
  //Cannot assign an abstract constructor type to a non-abstract constructor type.
  `;

  abstractConstructSignaturesNew = `
  abstract class Shape {
    abstract getArea(): number;
  }
   
  interface HasArea {
    getArea(): number;
  }
   
  function makeSubclassWithArea(Ctor: abstract new () => HasArea) {
    return class extends Ctor {
      getArea() {
        return 42
      }
    };
  }
   
  let MyShape = makeSubclassWithArea(Shape);
  `;

  mixin = `
  abstract class SuperClass {
    abstract someMethod(): void;
    badda() {}
  }
 
  type AbstractConstructor<T> = abstract new (...args: any[]) => T
 
  //This is a mixin funnction that accepts a constructor and return an abstract class
  //It will add the "getStyles" method on the given constructor
  function withStyles<T extends AbstractConstructor<object>>(Ctor: T) {
    abstract class StyledClass extends Ctor {
        getStyles() {
            // ...
        }
    }
    return StyledClass;
  }
 
  //Extend the abstract class returned by the mixin function
  class SubClass extends withStyles(SuperClass) {
    someMethod() {
        this.someMethod()
    }
  }
  `;
}

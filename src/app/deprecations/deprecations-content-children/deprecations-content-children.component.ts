import { Component, ContentChildren, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-deprecations-content-children',
  templateUrl: './deprecations-content-children.component.html',
  styleUrls: ['./deprecations-content-children.component.scss']
})
export class DeprecationsContentChildrenComponent {

  @ContentChildren('item') items: QueryList<ElementRef<any>> | undefined;

  ngAfterContentInit() {
    this.items?.changes.subscribe(items => {
      console.log(items)
    });
  }

}

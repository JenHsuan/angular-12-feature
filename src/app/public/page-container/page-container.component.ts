import { Component, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent{
  @Input('title') title;
  @Input() sectionTitles: string[];
  @Input() sections: QueryList<ElementRef> | undefined;
}

import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DOCUMENTS);
  escapeHtml = escapeHtml;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  titles = ["Introduction"];

  constructor(private changeDetectorRef: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}

import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-learning-resource',
  templateUrl: './learning-resource.component.html',
  styleUrls: ['./learning-resource.component.scss']
})
export class LearningResourceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.LEARNING_RESOURCE);
  titles = ["Description"];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

}

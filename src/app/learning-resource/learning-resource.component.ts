import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-learning-resource',
  templateUrl: './learning-resource.component.html',
  styleUrls: ['./learning-resource.component.scss']
})
export class LearningResourceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.LEARNING_RESOURCE);
}

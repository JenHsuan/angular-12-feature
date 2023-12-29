import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-language-service',
  templateUrl: './language-service.component.html',
  styleUrls: ['./language-service.component.scss']
})
export class LanguageServiceComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.LANGUAGE_SERVICE);
}

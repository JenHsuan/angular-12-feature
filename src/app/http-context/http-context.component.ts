import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-http-context',
  templateUrl: './http-context.component.html',
  styleUrls: ['./http-context.component.scss']
})
export class HttpContextComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.HTTP_CONTEXT);
}

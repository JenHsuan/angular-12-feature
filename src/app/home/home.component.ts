import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { timelineUrl, v13Url, v14Url, v15Url, v16Url, v17Url } from '../public/config/url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.HOME);
  v13Url = v13Url;
  v14Url = v14Url;
  v15Url = v15Url;
  v16Url = v16Url;
  v17Url = v17Url;
  timelineUrl = timelineUrl;

}

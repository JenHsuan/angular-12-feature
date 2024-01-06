import { Component, OnInit } from '@angular/core';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { timelineUrl, v13Url, v14Url, v15Url, v16Url, v17Url } from '../public/config/url';
import { Router } from '@angular/router';
import { ThemeService } from '../public/theme/service/theme.service';
import { ThemeType } from '../public/theme/domain/theme.damin';

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
  currentImage: string = "";

  private themeImageMap = new Map<ThemeType, string>([
    [ThemeType.light, "../assets/image/angular-logo.png"],
    [ThemeType.dark, "../assets/image/angular-logo-dark.png"]
  ]);

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.themeService.theme$.subscribe(themeType => {
      let url = this.themeImageMap.get(themeType);
      if (url) {
        this.currentImage = url;
      }
    });
  }

  firstPage() {
    const list = [...ROUTE_MAP.keys()];
    const nextPage = list[1];
    this.router.navigate([nextPage]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-i18n-transition',
  templateUrl: './i18n-transition.component.html',
  styleUrls: ['./i18n-transition.component.scss']
})
export class I18nTransitionComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.I18N_TRANSITION);

  preparation = `
  ng add @angular/localize
  `;

  generateJson =  `
  ng extract-i18n --format=legacy-migrate
  `;

  migration = `
  npx localize-migrate --files=*.xlf --mapFile=messages.json
  `;

  zshSetUp = `
  sudo nano ~/.zshrc
  `;

  zshAdd = `
  setopt no_nomatch
  `;
}

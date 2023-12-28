import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-migrations',
  templateUrl: './migrations.component.html',
  styleUrls: ['./migrations.component.scss']
})
export class MigrationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.MIGRATIONS);

  instruction = `
  npx @angular/cli@12 new Angular13Project
  `;

  updateInstruction = `
  npx @angular/cli@12 update @angular/core@12 @angular/cli@12
  `;
}

import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);

  routeLinkCancel = `
  <a [routerLink]="linkEnabled ? 'path' : null">Link</a>
  `;

  nullValidator = `
  <input name="firstName" ngModel [maxlength]="null">
  `;

  cancelRoute = `
  @NgModule({
    imports: [RouterModule.forRoot(
      routes, 
      { canceledNavigationResolution: 'computed' },
    )],
    exports: [RouterModule]
  })
  `;
}
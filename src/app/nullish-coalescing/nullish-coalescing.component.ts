import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';

@Component({
  selector: 'app-nullish-coalescing',
  templateUrl: './nullish-coalescing.component.html',
  styleUrls: ['./nullish-coalescing.component.scss']
})
export class NullishCoalescingComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NULLISH_COALESCING);

  age: number | null = null;
  calculateAge() {
    return 1;
  }

  legazyCode = `
  <div class="item">
    {{age !== null && age !== undefined ? age : calculateAge() }}
  </div>
  `;

  newCode = `
  <div class="item">
    {{ age ?? calculateAge() }}
  </div>
  `;
}

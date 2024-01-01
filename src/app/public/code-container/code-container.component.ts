import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-container',
  templateUrl: './code-container.component.html',
  styleUrls: ['./code-container.component.scss']
})
export class CodeContainerComponent {
  @Input() code = '';
  @Input() languages: string[];
}

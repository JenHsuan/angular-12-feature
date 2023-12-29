import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-styict-mode-strict-template',
  templateUrl: './styict-mode-strict-template.component.html',
  styleUrls: ['./styict-mode-strict-template.component.scss']
})
export class StyictModeStrictTemplateComponent {
  //@Input() private data: number = 0;
  @Input() data: number = 0;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent {
  isContentOpen: boolean = true;

  get titleClassName() {
    return this.isContentOpen ? 'section-icon' : 'section-icon close';
  }

  get titleSectionClassName() {
    return this.isContentOpen ? 'title-section' : 'title-section close';
  }

  toggleContentOpen() {
    this.isContentOpen = !this.isContentOpen;
  }
}

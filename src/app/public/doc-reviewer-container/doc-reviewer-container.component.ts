import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-doc-reviewer-container',
  templateUrl: './doc-reviewer-container.component.html',
  styleUrls: ['./doc-reviewer-container.component.scss']
})
export class DocReviewerContainerComponent {
  @Input() titles: string[];
  @Input() sections: QueryList<ElementRef> | undefined;
  @ViewChildren("menu") menu: QueryList<ElementRef> | undefined;

  currentIndex = -1;

  ngAfterViewInit() {
    addEventListener("scroll", (event) => {
      this.sections?.toArray().forEach((section, index) => {
        if (this.isInViewport(section)) {
          this.currentIndex = index;
          this.menu?.get(index)?.nativeElement.classList.add("active")
        }
      })

      this.sections?.toArray().forEach((section, index) => {
        if (index !== this.currentIndex) {
          this.menu?.get(index)?.nativeElement.classList.remove("active")}
      })
    });
  }

  isInViewport (elem: ElementRef) {
    const bounding = elem.nativeElement.getBoundingClientRect();
    return (bounding.top < 0);
  }
}

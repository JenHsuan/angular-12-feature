import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReviewerContainerComponent } from './doc-reviewer-container.component';

describe('DocReviewerContainerComponent', () => {
  let component: DocReviewerContainerComponent;
  let fixture: ComponentFixture<DocReviewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocReviewerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocReviewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

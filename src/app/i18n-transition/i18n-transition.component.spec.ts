import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nTransitionComponent } from './i18n-transition.component';

describe('I18nTransitionComponent', () => {
  let component: I18nTransitionComponent;
  let fixture: ComponentFixture<I18nTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

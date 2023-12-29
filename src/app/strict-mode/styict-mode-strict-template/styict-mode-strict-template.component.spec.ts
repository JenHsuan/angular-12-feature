import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyictModeStrictTemplateComponent } from './styict-mode-strict-template.component';

describe('StyictModeStrictTemplateComponent', () => {
  let component: StyictModeStrictTemplateComponent;
  let fixture: ComponentFixture<StyictModeStrictTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyictModeStrictTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyictModeStrictTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

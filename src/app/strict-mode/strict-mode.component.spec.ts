import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrictModeComponent } from './strict-mode.component';

describe('StrictModeComponent', () => {
  let component: StrictModeComponent;
  let fixture: ComponentFixture<StrictModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrictModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrictModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

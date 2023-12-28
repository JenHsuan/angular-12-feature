import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprecationsComponent } from './deprecations.component';

describe('DeprecationsComponent', () => {
  let component: DeprecationsComponent;
  let fixture: ComponentFixture<DeprecationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeprecationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprecationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

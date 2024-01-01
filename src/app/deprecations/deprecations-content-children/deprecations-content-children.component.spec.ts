import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprecationsContentChildrenComponent } from './deprecations-content-children.component';

describe('DeprecationsContentChildrenComponent', () => {
  let component: DeprecationsContentChildrenComponent;
  let fixture: ComponentFixture<DeprecationsContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeprecationsContentChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprecationsContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

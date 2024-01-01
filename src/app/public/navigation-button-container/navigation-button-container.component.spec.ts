import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationButtonContainerComponent } from './navigation-button-container.component';

describe('NavigationButtonContainerComponent', () => {
  let component: NavigationButtonContainerComponent;
  let fixture: ComponentFixture<NavigationButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

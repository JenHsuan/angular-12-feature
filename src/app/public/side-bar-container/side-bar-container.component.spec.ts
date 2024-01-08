import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarContainerComponent } from './side-bar-container.component';

describe('SideBarComponent', () => {
  let component: SideBarContainerComponent;
  let fixture: ComponentFixture<SideBarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SideBarContainerComponent]
    });
    fixture = TestBed.createComponent(SideBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

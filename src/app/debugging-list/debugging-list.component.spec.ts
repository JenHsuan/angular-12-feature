import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggingListComponent } from './debugging-list.component';

describe('DebuggingListComponent', () => {
  let component: DebuggingListComponent;
  let fixture: ComponentFixture<DebuggingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebuggingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuggingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NullishCoalescingComponent } from './nullish-coalescing.component';

describe('NullishCoalescingComponent', () => {
  let component: NullishCoalescingComponent;
  let fixture: ComponentFixture<NullishCoalescingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NullishCoalescingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NullishCoalescingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

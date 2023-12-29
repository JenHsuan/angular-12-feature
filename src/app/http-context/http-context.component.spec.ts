import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpContextComponent } from './http-context.component';

describe('HttpContextComponent', () => {
  let component: HttpContextComponent;
  let fixture: ComponentFixture<HttpContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

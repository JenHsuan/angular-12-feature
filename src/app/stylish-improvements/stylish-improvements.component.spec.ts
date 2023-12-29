import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishImprovementsComponent } from './stylish-improvements.component';

describe('StylishImprovementsComponent', () => {
  let component: StylishImprovementsComponent;
  let fixture: ComponentFixture<StylishImprovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishImprovementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageServiceComponent } from './language-service.component';

describe('LanguageServiceComponent', () => {
  let component: LanguageServiceComponent;
  let fixture: ComponentFixture<LanguageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

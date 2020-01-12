import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAdminSectionComponent } from './quiz-admin-section.component';

describe('QuizAdminSectionComponent', () => {
  let component: QuizAdminSectionComponent;
  let fixture: ComponentFixture<QuizAdminSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAdminSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAdminSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

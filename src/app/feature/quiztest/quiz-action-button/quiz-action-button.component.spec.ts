import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizActionButtonComponent } from './quiz-action-button.component';

describe('QuizActionButtonComponent', () => {
  let component: QuizActionButtonComponent;
  let fixture: ComponentFixture<QuizActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

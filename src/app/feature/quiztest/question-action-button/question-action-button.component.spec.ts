import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionActionButtonComponent } from './question-action-button.component';

describe('QuestionActionButtonComponent', () => {
  let component: QuestionActionButtonComponent;
  let fixture: ComponentFixture<QuestionActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

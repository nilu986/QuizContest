import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuiztestRoutingModule } from './quiztest-routing.module';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { QuestionActionButtonComponent } from './question-action-button/question-action-button.component';
import { QuizActionButtonComponent } from './quiz-action-button/quiz-action-button.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { QuiztestComponent } from './quiztest.component';


@NgModule({
  declarations: [QuizHeaderComponent, QuestionSectionComponent, QuestionActionButtonComponent, QuizActionButtonComponent, QuizSectionComponent, QuiztestComponent],
  imports: [
    CommonModule,
    QuiztestRoutingModule
  ]
})
export class QuiztestModule { }

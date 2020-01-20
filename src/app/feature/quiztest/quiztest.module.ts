import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { QuiztestRoutingModule } from './quiztest-routing.module';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { QuestionActionButtonComponent } from './question-action-button/question-action-button.component';
import { QuizActionButtonComponent } from './quiz-action-button/quiz-action-button.component';
import { QuizSectionComponent } from './quiz-section/quiz-section.component';
import { QuiztestComponent } from './quiztest.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';


@NgModule({
  declarations: [QuizHeaderComponent, QuestionSectionComponent, QuestionActionButtonComponent, QuizActionButtonComponent, QuizSectionComponent, QuiztestComponent, QuizResultsComponent],
  imports: [
    CommonModule,
    QuiztestRoutingModule,
    FormsModule
  ]
})
export class QuiztestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizAdminRoutingModule } from './quiz-admin-routing.module';
import { QuizAdminSectionComponent } from './quiz-admin-section/quiz-admin-section.component';


@NgModule({
  declarations: [QuizAdminSectionComponent],
  imports: [
    CommonModule,
    QuizAdminRoutingModule
  ]
})
export class QuizAdminModule { }

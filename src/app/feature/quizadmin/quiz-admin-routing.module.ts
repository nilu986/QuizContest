import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizAdminSectionComponent } from './quiz-admin-section/quiz-admin-section.component';


const routes: Routes = [
    {path:'', component: QuizAdminSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizAdminRoutingModule { }

import { QuiztestComponent } from './quiztest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { QuizSectionComponent } from './quiz-section/quiz-section.component';


const routes: Routes = [
  {path:'', component:QuiztestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuiztestRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'quiztest', loadChildren: './feature/quiztest/quiztest.module#QuiztestModule'},
    {path: 'quizadmin', loadChildren: './feature/quizadmin/quiz-admin.module#QuizAdminModule'},
    {path: '', redirectTo: 'quiztest', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

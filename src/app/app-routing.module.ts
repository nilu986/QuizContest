import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'quiztest', loadChildren: ()=> import('./feature/quiztest/quiztest.module').then(m => m.QuiztestModule)},
    {path: 'quizadmin', loadChildren: ()=> import('./feature/quizadmin/quiz-admin.module').then(m => m.QuizAdminModule)},
    {path: '', redirectTo: 'quiztest', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

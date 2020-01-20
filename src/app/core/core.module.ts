import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { QuizHttpInterceptor } from './interceptor/quiz-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS, useClass:QuizHttpInterceptor, multi:true}
  ]
})
export class CoreModule { }

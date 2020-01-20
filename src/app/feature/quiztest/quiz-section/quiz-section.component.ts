import { Component, OnInit } from '@angular/core';
import { Quiz, QuizConfig } from '../models';
import { QuizTestService } from '../quiz-test.service';

@Component({
  selector: 'app-quiz-section',
  templateUrl: './quiz-section.component.html',
  styleUrls: ['./quiz-section.component.css']
})
export class QuizSectionComponent implements OnInit {

  quizes: any[];
  quizId:string;
  quiz: Quiz = new Quiz(null);
  quizName:string;
  
  constructor(private _quizService:QuizTestService) { }

  ngOnInit() {
    this.quizes = this._quizService.getAll();
    this.quizId = this.quizes[0].id;
    this.quizName = this.quizes[0].name;
    this._quizService.get(this.quizId).subscribe((res)=>{
        if(res){
          this.quiz = new Quiz(res);
        }
    });
  }

}

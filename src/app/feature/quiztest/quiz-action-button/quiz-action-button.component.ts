import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../models';
import * as Constants from '../constants';

@Component({
  selector: 'app-quiz-action-button',
  templateUrl: './quiz-action-button.component.html',
  styleUrls: ['./quiz-action-button.component.css']
})
export class QuizActionButtonComponent implements OnInit, OnChanges {
  @Input() public quiz:Quiz;
  @Output() public quizUpdate = new EventEmitter();
  @Output() public quizReviewUpdate = new EventEmitter();
  constructor() { }
  mode:boolean = false;
  ngOnInit() {
  }
  ngOnChanges(){
    this.initQuizAction();
  }
  initQuizAction(){
    if(this.quiz){
      this.mode = this.quiz.mode == Constants.QUIZ_MODE.QUIZ ? true : false;
    }
  }
  updateQuiz(){
    this.quiz.mode = Constants.QUIZ_MODE.QUIZ;
    this.quizUpdate.emit(this.quiz);
  }
  updateReview(){
    this.quiz.mode = Constants.QUIZ_MODE.REVIEW;
    this.quizReviewUpdate.emit(this.quiz);
  }
  onSubmit(){
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
    this.quiz.mode = Constants.QUIZ_MODE.RESULT;
  }

}

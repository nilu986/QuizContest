import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Quiz, Question } from '../models';
import * as Constants from '../constants';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit, OnChanges {

  @Input() public quiz:Quiz;

  mode:boolean = false;
  pager:any = {
    index: 0,
    size: 1,
    count: 1
  };
  answered:string;
  correct: string;
  constructor() { }

  ngOnInit() {
    this.answered = Constants.QUIZ_ANSWER.ANSWERED;
    this.correct = Constants.QUIZ_ANSWER_CORRECT.CORRECT;
  }
  ngOnChanges(){
    this.initResults();
  }
  initResults(){
    if(this.quiz){
      this.mode = this.quiz.mode == (Constants.QUIZ_MODE.RESULT || Constants.QUIZ_MODE.REVIEW) ? true : false;
    }
  }
  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.quiz.mode = Constants.QUIZ_MODE.QUIZ;
    }
  }
  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? Constants.QUIZ_ANSWER.ANSWERED : Constants.QUIZ_ANSWER.NOT_ANSWERED;
  };
  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? Constants.QUIZ_ANSWER_CORRECT.CORRECT : Constants.QUIZ_ANSWER_CORRECT.WRONG;
  };

}

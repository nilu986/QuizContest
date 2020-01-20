import { QuizConfig } from './../models/quiz-config';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Quiz } from './../models';
import * as Constant from '../constants';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent implements OnInit, OnChanges {

  @Input() public quiz:Quiz;
 
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  config:QuizConfig;
  ellapsedTime:string = '00:00';
  duration = '';
  timer: any = null;
  startTime: Date;
  endTime: Date;
  mode:boolean = false;
  //filteredQuestions:any[] = [];
  constructor() { }

  ngOnInit() {
    this.initQuiestion();    
  }
  ngOnChanges(){
    this.initQuiestion();
  }
  initQuiestion(){
    if(this.quiz && this.quiz.questions){
      this.pager.count = this.quiz.questions.length;
      this.config = this.quiz.config;
      this.startTime = new Date();
      this.duration = this.parsetime(this.config.duration);
      this.timer = setInterval(()=>{this.tick()}, 1000);
      this.mode = this.quiz.mode == Constant.QUIZ_MODE.QUIZ ? true : false;
      //this.filteredQuestions = this.quiz.questions ? this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
    }
  }
  get filteredQuestions(){
    return this.quiz.questions ? this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }
  tick(){
    const now = new Date();
    const diff = (now.getTime()- this.startTime.getTime()) / 1000;
    this.ellapsedTime = this.parsetime(diff);
  }
  parsetime(totalSeconds: number){
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }
  onSelect(question, option){

  }
  changedPager(event){
    this.pager = event;
  }

}

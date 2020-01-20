import { QuizConfig } from './../models/quiz-config';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-action-button',
  templateUrl: './question-action-button.component.html',
  styleUrls: ['./question-action-button.component.css']
})
export class QuestionActionButtonComponent implements OnInit {
  @Input() public pager:any;
  @Input() public config:QuizConfig;
  //@Output() public changedPager = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      //this.changedPager.emit(this.pager);
    }
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css']
})
export class QuizHeaderComponent implements OnInit, OnChanges {
  @Input() public quizes:any[];
  @Input() public quizId:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  }

}

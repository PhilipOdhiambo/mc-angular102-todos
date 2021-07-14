import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo:Todo
  @Output() hideDetail = new EventEmitter()

  onHide() {
    this.hideDetail.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    new Todo("work","Do apprisal for all support staffs"),
    new Todo("work","submit weekly report"),
    new Todo("school","Submit Independent Project IP"),
    new Todo("financial","Pay rent and other bills"),
    new Todo("social","Visit my brother's family"),
    new Todo("family","take my family on a road trip")
  ]

  filterTodos:Todo[]


  getCategories():string[] {
    // Returns a unique list of  categories
    return this.todos.map(todo => todo.category)
    .filter((value,index,self) => self.indexOf(value) === index)
  }

  onFilterTodos(event) {
    let filterValue = event.target.value;
    if (filterValue == '') {
      this.filterTodos = this.todos
      return
    }
    this.filterTodos = this.todos.filter(todo => todo.category === filterValue)
  }

  constructor() {
    this.filterTodos = this.todos;

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  todos: Array<TodoItem>;
  remaining: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todos = this.todoService.getTodoList();
    console.log(this.todos);
    this.checkRemaining()
  }

  deleteTodoItem(id) {
    this.todos = this.todoService.deleteTodoItem(id);
  }

  completed() {
    return this.todos.filter(e => e.status === true);
  }

  filterTodoList(type: string) {
    switch (type) {
      case "completed": {
        this.getTodoList();
        this.todos = this.todos.filter(e => e.status === true);
        console.log(this.todos.filter(e => e.status === true))
        break;
      }
      case "remaining": {
        this.getTodoList();
        this.todos = this.todos.filter(e => e.status === false)
        break;
      }
      default: {
        this.getTodoList();
        break;
      }
    }
  }

  checkRemaining() {
    const remaining = this.todos.filter(todo => !todo.status);
    this.remaining = remaining.length;
  }

}

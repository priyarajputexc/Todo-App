import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { todoList } from 'src/app/constants/mock-todo-list';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  todos: Array<TodoItem>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todos = this.todoService.getTodoList();
    console.log(this.todos);
  }

  deleteTodoItem(id) {
    this.todos = this.todoService.deleteTodoItem(id);
  }
}

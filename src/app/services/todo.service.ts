import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { todoList } from '../constants/mock-todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<TodoItem>;

  constructor() {
    this.todos = todoList;
  }

  getTodoList() {
    return this.todos;
  }

  addTodo(task: string) {
    this.todos.push({
      id: this.todos.length + 1,
      task,
      status: false
    });
  }
}

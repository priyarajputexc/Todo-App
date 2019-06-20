import { Injectable } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { todoList } from '../constants/mock-todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Array<TodoItem>;

  constructor() { 
    this.todos=todoList;
  }

  getTodoList(){
    return this.todos;
  }

}

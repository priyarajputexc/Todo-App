import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-status-todo',
  templateUrl: './status-todo.component.html',
  styleUrls: ['./status-todo.component.css']
})
export class StatusTodoComponent implements OnInit {
  todos: Array<TodoItem>;

  @Output() task: EventEmitter<string> = new EventEmitter<string>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onClick(type: string) {
    this.task.emit(type);
  }

}

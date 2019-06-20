import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from 'src/app/models/todo';


@Component({
  selector: 'app-edit-todo-list',
  templateUrl: './edit-todo-list.component.html',
  styleUrls: ['./edit-todo-list.component.css']
})
export class EditTodoListComponent implements OnInit {
  todoItem: TodoItem;
  error: boolean;

  constructor(
    private location: Location,
    public todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getTodoItemById(id);
  }

  getTodoItemById(id) {
    const todoItem = this.todoService.getTodoItemById(id);
    this.todoItem = { ...todoItem };
  }

  onEdit(editForm) {
    let { todoItem } = editForm.value; // get todoItem from task using object destructuring!!
    todoItem = todoItem.trim();
    if (todoItem && todoItem.length) {
      this.todoService.editTodoItem(this.todoItem);
      this.goBack();
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        editForm.reset();
      }, 2000)
    }
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  error: boolean;

  constructor(
    private location: Location,
    private todoService: TodoService
    ) { }

  ngOnInit() {
  }

  onSubmit(signUpForm) {
    let { todoItem } = signUpForm.value; // get todoItem from task using object destructuring!!
    todoItem = todoItem.trim();
    if (todoItem && todoItem.length) {
      this.todoService.addTodo(todoItem);
      this.goBack();
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
        signUpForm.reset();
      },2000)
    }
  }

  goBack(): void {
    this.location.back();
  }
}

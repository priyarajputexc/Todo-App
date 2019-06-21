import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { AddTodoListComponent } from './components/add-todo-list/add-todo-list.component';
import { FormsModule } from "@angular/forms";
import { EditTodoListComponent } from './components/edit-todo-list/edit-todo-list.component';
import { StatusTodoComponent } from './components/status-todo/status-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    AddTodoListComponent,
    EditTodoListComponent,
    StatusTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

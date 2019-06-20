import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListComponent } from './components/show-list/show-list.component';
import { AddTodoListComponent } from './components/add-todo-list/add-todo-list.component';
import { EditTodoListComponent } from './components/edit-todo-list/edit-todo-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "show-list",
    pathMatch: "full"
  },
  {
    path: "show-list",
    component: ShowListComponent
  },
  {
    path: "add-todo",
    component: AddTodoListComponent
  },
  {
    path: "edit-todo/:id",
    component: EditTodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

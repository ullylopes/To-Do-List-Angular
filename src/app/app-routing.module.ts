import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component'
import {AppComponent} from './app.component'

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'AppComponent' },
 {path: 'listas', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

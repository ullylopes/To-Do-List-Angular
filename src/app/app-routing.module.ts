import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {AppComponent} from './app.component';
import {TodoCreateComponent} from '../app/todo-create/todo-create.component';
import {TodoAddComponent} from '../app/todo-add/todo-add.component';
const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'TodoListComponent' },
 {path: 'listas', component: TodoListComponent},
 {path: 'create', component: TodoCreateComponent},
 {path: 'editar/:id', component: TodoAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]
})
export class AppRoutingModule { }
        
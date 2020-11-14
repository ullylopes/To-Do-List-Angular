import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component'
import {AppComponent} from './app.component'
import {TodoCreateComponent} from '../app/todo-create/todo-create.component'

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'AppComponent' },
 {path: 'listas', component: TodoListComponent},
 {path: 'create', component: TodoCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]
})
export class AppRoutingModule { }
        
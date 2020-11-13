import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../../services/todo.service'

import {DataSource} from '@angular/cdk/table';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  constructor( private router: Router, private todoService: TodoService ) { }

 public todos: Todo[] = []
  
  displayedColumns = ['title', 'firstName', 'middleName' ];

  ngOnInit(): void {
      this.loadAllTodoList();    
  }
  loadAllTodoList() {
      this.todos = this.todoService.getAllTodos();
      
  }

    onClickEditTodoDetail(id) {
      console.log(id);
      this.router.navigate(['/todo-detail['], {queryParams: {id: id}});
  }
  
  onClickAddTodo() {
      this.router.navigate(['/dashboard']);
  }
  
  onClickTodoDelete(id) {
      this.todoService.deleteTodoDetail(id);
      this.loadAllTodoList(); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { model } from '../model/model';
import { RestApiService } from '../service/rest-api.service'





@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  constructor(  private restApi: RestApiService ) { }

 modelList: any = [];
  
  

  ngOnInit(): void {
  this.loadModel()
  }
 
loadModel(){
  return this.restApi.getModels().subscribe((data: {}) => {
    this.modelList = data;
  })
}

deleteModel(id){
  if(window.confirm('Você tem certeza que deseja Excluir?')){
this.restApi.deleteModel(id).subscribe(data => {
  this.loadModel()
     })
  }
}


}

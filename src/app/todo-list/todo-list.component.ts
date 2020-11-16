import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../service/rest-api.service'





@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  modelLista:any = [];

  constructor(public restApi: RestApiService ) { }


  ngOnInit(): void {
    this.loadModel()
    }
   
  loadModel(){
     this.restApi.getModels().subscribe((data: {}) => {
   
      this.modelLista.push(data);
   
    });console.log(this.modelLista)
  }
  
 // Get model listas
 /* loadModel() {    
    
return this.restApi.getModels().subscribe((data: {}) => {this.modelLista = data;     })   } */


  load() {       location.reload()}

deleteModel(id){
  if(window.confirm('Você tem certeza que deseja Excluir?')){
this.restApi.deleteModel(id).subscribe(data => {
  this.loadModel()
  this.load()
  
     })
  }
}


}

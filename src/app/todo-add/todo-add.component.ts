import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  modelData: any = {};


  constructor(
      public restApi: RestApiService,
      public actRoute: ActivatedRoute,
      public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getModel(this.id).subscribe((data: {}) => {
    this.modelData = data;
    })
  }

  // Atualziar tarefa
  updateModel() {
    if(window.confirm('Tem certeza que deseja atualizar?'))
    
    {this.restApi.updateModel(this.id, this.modelData).subscribe(data => {this.router.navigate(['/listas'])})

    }
  }


}







    
    
    
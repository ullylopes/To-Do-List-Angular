import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../service/rest-api.service";


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})


export class TodoCreateComponent implements OnInit {


  @Input() modelCreate = { title: '', firstName: '', email: '', note: '' }


  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }
  ngOnInit() { }

  addModel() {
    this.restApi.createModel(this.modelCreate).subscribe((data:
      {}) => {
      this.router.navigate(['/listas'])
    })
  }
}


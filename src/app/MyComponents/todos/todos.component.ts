import { Component, OnInit } from '@angular/core';
import { ToDo } from "../../ToDo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

    todos:ToDo[];//create array of type ToDo.ts

    constructor(){
      this.todos = [
        {
          sno:1,
          title:"This is title1",
          desc:"This is Description",
          active: true
        },
        {
          sno:2,
          title:"This is title2",
          desc:"This is Description",
          active: true
        },
        {
          sno:3,
          title:"This is title3",
          desc:"This is Description",
          active: true
        }
      ]
    }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}

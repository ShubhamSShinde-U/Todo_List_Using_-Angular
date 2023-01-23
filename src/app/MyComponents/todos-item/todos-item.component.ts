import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent {
  @Input() todo: ToDo | undefined; //Accept the todos
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();//new event emitter to delete the todo after clicking the delete button
  constructor(){}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  onclick( todo: ToDo){
    console.log("Delete button clicked");
  }

}

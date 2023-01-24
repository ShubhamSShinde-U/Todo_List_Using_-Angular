import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: ToDo; //Accept the todos
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();//new event emitter to delete the todo after clicking the delete button
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onclick( todo: ToDo){
    this.todoDelete.emit(todo);
    console.log("Delete button clicked");
  }

}

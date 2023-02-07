import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent  {
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();//new event emitter to delete the todo after clicking the delete button
  constructor(){}

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}

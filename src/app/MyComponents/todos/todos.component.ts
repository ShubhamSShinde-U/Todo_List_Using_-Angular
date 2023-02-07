import { Component, OnInit } from '@angular/core';
import { ToDo } from "../../ToDo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    localItem:string | null;
    todos:ToDo[];//create array of type ToDo.ts
    
    constructor(){
      this.localItem = localStorage.getItem("todos");
      if(this.localItem==null){
        this.todos = [];
      }
      else{ 
        this.todos = JSON.parse(this.localItem) ;
      }
    }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  
  deleteToDo(todo:ToDo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addToDo(todo:ToDo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:ToDo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  constructor(){
    setTimeout(() => {
      this.title = "Wel Come guys! Have you observed the change!";
    }, 3000);
  }
  
}

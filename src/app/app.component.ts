import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  message: string = 'Hello world!';
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}


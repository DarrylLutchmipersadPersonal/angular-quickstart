// counter.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  styleUrls: ['./counter.component.css'],
  template: `
     <div class="counter">
      <button (click)="decrement()">
        Decrement
      </button>
      <input type="text" [value]="count">
      <button (click)="increment()">
        Increment
      </button>
    </div>
  `
})
export class CounterComponent {
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

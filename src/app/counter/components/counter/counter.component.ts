import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `<h3>{{counter}}</h3>


  <button (click)="increseBy(1)">+1</button>
  <button (click)="decreseBy(1)">-1</button>
  <button (click)="reset()">reset</button>`
})


export class counterComponent {

  public counter: number = 10;
   increseBy(value: number): void {
     this.counter  += value;
   }
   decreseBy (value: number): void {
     this.counter -= value;
   }

   reset(): void {
     this.counter = 10;
   }



}



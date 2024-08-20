import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor'
  ];

  public heroeBorrado?: string;

  public borrarHeroe() {
    this.heroeBorrado = this.heroNames.pop();
  }


}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from '../models/items.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnChanges {
  @Input() items: Item[]=[]; // Propiedad para recibir la lista de elementos
  // @Input() items: Item[] = []; // Propiedad para recibir los elementos

ngOnInit(): void {
  console.log("inicial");
  console.log(this.items);
  
}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.items){
      console.log("ngOnChanges this.items",this.items);
    }

  }
}

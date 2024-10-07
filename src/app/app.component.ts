import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Item } from './models/items.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    ListComponent,
    FormularioComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crud';
  items: Item[] = []; // Inicializa tu lista de items

  agregarItem(item: Item) {
    console.log("================",item);
    this.items.push(item); // Agrega el nuevo item a la lista
    console.log(this.items);
  }
}

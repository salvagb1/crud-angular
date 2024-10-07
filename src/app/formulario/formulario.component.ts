import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Item } from '../models/items.models';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  formulario: FormGroup;
  @Output() nuevoItem = new EventEmitter<Item>(); // Evento para emitir el nuevo elemento

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  guardar() {
    if (this.formulario.valid) {
      const nuevoItem = new Item(
        Math.random(), // ID generado aleatoriamente
        this.formulario.get('nombre')?.value,
        this.formulario.get('descripcion')?.value
      );
      this.nuevoItem.emit(nuevoItem); // Emitimos el nuevo elemento
      this.formulario.reset(); // Reiniciamos el formulario
      console.log(nuevoItem);
      
    }
  }
}

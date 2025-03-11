import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos: { descripcion: string; precio: number }[] = []; 
  productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      descripcion: ['', Validators.required], 
      precio: ['', [Validators.required, Validators.min(0.01)]] 
    });
  }

  agregarProducto() {
    if (this.productoForm.valid) {
      this.productos.push(this.productoForm.value); 
      this.productoForm.reset(); 
    }
  }
    
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.cdhtml',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensjaeComponent {

  mensaje = "";

  resetearMensaje() {

    return this.mensaje = "";

  }

  mostrarMensaje() {

    return this.mensaje = "Hola Mundo";
    
  }

}
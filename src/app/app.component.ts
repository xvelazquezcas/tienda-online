import { Component } from '@angular/core';
import { MostrarMensjaeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@Component({
  selector: 'app-root',
  imports: [MostrarMensjaeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Act6';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html', // <--- CAMBIADO para coincidir con tu archivo
  styleUrl: './app.css'      // <--- CAMBIADO para coincidir con tu archivo
})
export class App {           // <--- CAMBIADO (antes era AppComponent)
  title = 'InventarioWeb';
}
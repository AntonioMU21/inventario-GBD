import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-formulario-articulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css']
})
export class FormularioArticuloComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private servicio = inject(InventarioService);

  id: number = 0;
  
  articulo: Articulo = {
    id: 0,
    nombre: '',
    imagen: '/assets/no-image.jpg',
    stock: 0
  };

  archivoSeleccionado: File | null = null;
  imagenPreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    const idUrl = this.route.snapshot.paramMap.get('id');
    
    if (idUrl) {
      this.id = parseInt(idUrl);
      
      this.servicio.obtenerPorId(this.id).subscribe((datos: Articulo) => {
        this.articulo = datos;
      });
    }
  }

  onArchivoSeleccionado(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.archivoSeleccionado = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imagenPreview = reader.result;
      reader.readAsDataURL(this.archivoSeleccionado as Blob);
    }
  }

  guardar() {
    if (this.archivoSeleccionado) {
      this.servicio.subirImagen(this.archivoSeleccionado).subscribe({
        next: (respuesta) => {
          this.articulo.imagen = 'http://localhost:5055' + respuesta.url;
          this.guardarDatosArticulo();
        },
        error: (err) => {
          console.error('Error al subir la imagen', err);
          alert('Hubo un error al subir la imagen.');
        }
      });
    } else {
      this.guardarDatosArticulo();
    }
  }
  private guardarDatosArticulo() {
    if (this.id === 0) {
      this.servicio.crear(this.articulo).subscribe(() => { 
        alert('Artículo guardado correctamente');
        this.router.navigate(['/']);
      });
    } else {
      this.articulo.id = this.id;
      
      this.servicio.editar(this.id, this.articulo).subscribe(() => {
        alert('Artículo editado correctamente');
        this.router.navigate(['/']);
      });
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
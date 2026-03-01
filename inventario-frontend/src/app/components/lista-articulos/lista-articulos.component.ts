import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from '../../services/inventario.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  private servicio = inject(InventarioService);
  private router = inject(Router);

  articulos: Articulo[] = [];
  articulosFiltrados: Articulo[] = [];
  textoBusqueda: string = "";

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.servicio.obtenerTodos().subscribe((datos: Articulo[]) => {
      this.articulos = datos;
      this.articulosFiltrados = datos;
    });
  }

  buscar() {
    this.articulosFiltrados = this.articulos.filter(art => 
      art.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  ordenar(orden: string) {
    if (orden === 'asc') {
      this.articulosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
      this.articulosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
  }

  irNuevo() {
    this.router.navigateByUrl('/nuevo');
  }

  editar(id: number) {
    this.router.navigateByUrl('/editar/' + id);
  }

  borrar(id: number) {
    if (confirm("Seguro que quieres borrar este artículo?")) {
      this.servicio.borrar(id).subscribe(() => {
        this.articulos = this.articulos.filter(a => a.id !== id);
        this.buscar(); 
      });
    }
  }
}
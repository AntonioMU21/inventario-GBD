import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private http = inject(HttpClient);
  private url = 'http://localhost:5055/api/articulos'; 

  constructor() { }
  
  obtenerTodos() {
    return this.http.get<Articulo[]>(this.url);
  }

  obtenerPorId(id: number) {
    return this.http.get<Articulo>(`${this.url}/${id}`);
  }

  crear(articulo: Articulo) {
    return this.http.post(this.url, articulo);
  }

  editar(id: number, articulo: Articulo) {
    return this.http.put(`${this.url}/${id}`, articulo);
  }

  borrar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
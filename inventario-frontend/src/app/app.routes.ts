import { Routes } from '@angular/router';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { FormularioArticuloComponent } from './components/formulario-articulo/formulario-articulo.component';

export const routes: Routes = [
  { path: '', component: ListaArticulosComponent },
  { path: 'nuevo', component: FormularioArticuloComponent },
  { path: 'editar/:id', component: FormularioArticuloComponent },
  { path: '**', redirectTo: '' }
];
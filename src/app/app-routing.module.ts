import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from '../app/components/formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DetalleNoticiaComponent} from './components/detalle-noticia/detalle-noticia.component';
const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:'formulario',component:FormularioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

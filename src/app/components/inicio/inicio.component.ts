import { Component, OnInit } from '@angular/core';
import { ListaNoticias} from 'src/app/interfaces/noticias';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  ListaNoticias=ListaNoticias;

  destacado:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}

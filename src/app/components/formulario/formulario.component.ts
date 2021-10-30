import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder,FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  activarMsg:boolean=false;
  formulario:FormGroup;

  constructor(private fb:FormBuilder,) {
     this.formulario=this.fb.group({
       nombre:['',[Validators.required, Validators.maxLength(10)]],
       telefono:['',[Validators.required,Validators.maxLength(9)]],
       correo :['',[Validators.required, Validators.email]],
       mensaje :['',[Validators.required,Validators.maxLength(100)]]
     });
  }

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsg=true;
  }
  

 
 
    
  }



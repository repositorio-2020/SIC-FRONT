import { Formulario } from 'src/app/models/formulario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Marca } from 'src/app/models/marca.model';
import { MarcaService } from '../../services/marca.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-crear-formulario',
  templateUrl: './crear-formulario.component.html',
  styleUrls: ['./crear-formulario.component.css']
})
export class CrearFormularioComponent implements OnInit {

  constructor(private serviceMarca:MarcaService,private serviceFormulario:FormularioService) { }

  formulario:Formulario;
  marcas:Marca[];
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = false;

  ngOnInit(): void {
    this.formulario = new Formulario();
    this.formulario.fecha= new Date();

    this.serviceMarca.getMarcas().subscribe(result=>{

      this.marcas = JSON.parse(JSON.stringify(result));

      //console.log("Marcas ",this.marcas);
    });

   // this.marcas=this.serviceMarca.getMarcas();
  }

  guardar(validar:NgForm) {
    this.isValidFormSubmitted = false;
    if ( validar.invalid ) {
      console.log('Formulario no válido');

      Swal.fire("Formulario","Formulario no válido","error");

      return;
    }

    //this.formulario.fecha = new Date();



    this.isValidFormSubmitted = true;

    this.serviceFormulario.crearFormularios(this.formulario).subscribe(result=>{
      Swal.fire("Formulario","Formulario Ingresado","success");
    });
  }

}

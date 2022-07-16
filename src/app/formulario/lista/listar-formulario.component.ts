import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModel.model';
import Swal from 'sweetalert2';
import { FormularioService } from 'src/app/services/formulario.service';
import { Formulario } from 'src/app/models/formulario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './listar-formulario.component.html',
  styleUrls: ['./listar-formulario.component.css']
})
export class ListarFormularioComponent implements OnInit {

formato: any[] = [];
  cargando = false;


  constructor( private formatoService: FormularioService,private router:Router ) { }

  ngOnInit() {



    this.cargando = true;
 
     this.formatoService.getFormularios().subscribe( (resp: any[]) => {
         console.log(resp);
         this.formato = resp;

         this.cargando = false;
       });

  // this.formato=  this.formatoService.getFormularios();

     this.cargando = false;

  }

  borrarHeroe( heroe: Formulario, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar el documento ${ heroe.documento }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.formato.splice(i, 1);
      }

    });



  }

  salir() {
    localStorage.removeItem("login");
    this.router.navigateByUrl("/login");
  }


}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from '../help/form-validator.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  loginRequest:Login;
  enviado:boolean=false;
  loginModel:Login; 

  constructor(private fb:FormBuilder,private validar:FormValidatorService,private router:Router,private serviceLogin:LoginService) { }

  ngOnInit(): void {
    localStorage.setItem("login","");
    this.loginform= this.fb.group({
      nombre:['',[Validators.required]],
      clave:['',[Validators.required]]
    });

  }





  login() {
    this.enviado=true;
    this.loginRequest = new Login();
    this.loginRequest.nombre=this.loginform.get("nombre").value;
    this.loginRequest.clave=this.loginform.get("clave").value;

   
    localStorage.setItem("login","Ingresado");
   
    // this.router.navigateByUrl('/formulario');
    this.serviceLogin.login(this.loginRequest).subscribe((result:Login) => {
   
      
      this.loginModel = new Login();

      this.loginModel = result;


       if ( this.loginModel == null || this.loginModel == undefined  ) {
        Swal.fire("Login","Usuario Fallido","warning");
        return;
       }



      // OK Login        
      if (this.loginModel.intentos == 0) {

        localStorage.setItem("login","Ingresado");
        this.router.navigateByUrl('/formulario');
        return;
      }

      // Error Clave
      if (this.loginModel.intentos >= 1 && this.loginModel.intentos <= 3 ) {
        Swal.fire("Login","Login Errado - Intentos "+this.loginModel.intentos,"warning");
        return;
      }

      // Clave Bloqueda
      if (this.loginModel.intentos >= 3) {
        Swal.fire("Login","Bloqueado Intento "+this.loginModel.intentos,"warning");
        return;
      }
      
},(error:any)=> {
      console.log("errorres",error);
    }
);


   
  }

  vaidarCampo(filed:string) {
      this.validar.campoRequerido(this.loginform,filed,this.enviado)
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Formulario } from "../models/formulario.model";
import { formularioRepository } from "../repository/formulario.repository";
import { marcaRepository } from "../repository/marca.repository";

//const base_url = environment.base_url;
const base_url = '/api';

@Injectable({
  providedIn: 'root'
})

export class FormularioService {

  constructor(private http:HttpClient) {}


  getFormularios() {



   return this.http.get(`${base_url}/formulario`);

  }

  getFormulario(id:number) {

 

   return this.http.get(`${base_url}/formulario/${id}`);

  }

  crearFormularios(formulario:Formulario) {


     return this.http.post(`${base_url}/formulario`,formulario);

  }

  borrar(id :number) {
   // return this.http.delete(`${base_url}/formulario/${id}`);
  }


}

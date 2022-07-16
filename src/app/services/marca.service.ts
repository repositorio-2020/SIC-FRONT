import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { marcaRepository } from "../repository/marca.repository";

//const base_url = environment.base_url;
const base_url = '/api';

@Injectable({
  providedIn: 'root'
})

export class MarcaService {

  constructor(private http:HttpClient) {}


  getMarcas() {


     return this.http.get(`${base_url}/marca`);

  }


}

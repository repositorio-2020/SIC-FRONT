
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';

//const base_url = environment.base_url;
const base_url = '/api/usuario/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(login:Login) {
       
    let urlLink = `${base_url}${login.nombre}/${login.clave}`;

    return this.http.get(urlLink);

      
  }
}

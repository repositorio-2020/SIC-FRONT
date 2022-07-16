import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { CrearFormularioComponent } from './formulario/crear/crear-formulario.component';
import { VerFormularioComponent } from './formulario/ver/ver-formulario.component';
import { ListarFormularioComponent } from './formulario/lista/listar-formulario.component';
import { FormatNumberDirective } from './directive/format-number.directive';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    UsuarioComponent,
    UsuariosComponent,
    CrearFormularioComponent,
    ListarFormularioComponent,
    VerFormularioComponent,
    FormatNumberDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

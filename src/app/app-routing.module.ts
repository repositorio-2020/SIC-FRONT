import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { ListarFormularioComponent } from './formulario/lista/listar-formulario.component';
import { VerFormularioComponent } from './formulario/ver/ver-formulario.component';
import { CrearFormularioComponent } from './formulario/crear/crear-formulario.component';
import { AuthGuard } from './guads/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'formulario', component: ListarFormularioComponent,canActivate:[AuthGuard] },
  { path: 'crear-formulario', component: CrearFormularioComponent,canActivate:[AuthGuard]  },
  { path: 'ver-formulario/:id', component: VerFormularioComponent,canActivate:[AuthGuard]  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'formulario' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

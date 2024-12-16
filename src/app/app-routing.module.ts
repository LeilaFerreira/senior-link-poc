import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaStartComponent } from './tela-start/tela-start.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireciona para TelaHome ao acessar a raiz
  { path: 'home', component: TelaHomeComponent },        // TelaHome é a tela inicial
  { path: 'formulario', component: FormularioComponent },  // Rota do segundo formulário
  { path: 'tela-start', component: TelaStartComponent },  // TelaStart é a segunda tela
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

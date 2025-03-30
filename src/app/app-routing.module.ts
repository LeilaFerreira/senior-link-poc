import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaStartComponent } from './tela-start/tela-start.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { AlertasComponent } from './alertas/alertas.component';
import { HistoricoDeSaudeComponent } from './historico-de-saude/historico-de-saude.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireciona para TelaHome ao acessar a raiz
  { path: 'home', component: TelaHomeComponent },        // TelaHome é a tela inicial
  { path: 'formulario', component: FormularioComponent },  // Rota do segundo formulário
  { path: 'tela-start', component: TelaStartComponent },  // TelaStart é a segunda tela
  { path: 'monitoramento', component: MonitoramentoComponent }, // Rota para o monitoramento
  { path: 'alertas', component: AlertasComponent }, // Rota para os alertas
  { path: 'historico-de-saude', component: HistoricoDeSaudeComponent }, // Rota para o histórico
  { path: 'perguntas', component: ChatbotComponent } , // Rota para chatbot
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

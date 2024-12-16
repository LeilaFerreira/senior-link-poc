import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagensComponent } from './imagens/imagens.component';
import { TelaStartComponent } from './tela-start/tela-start.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HistoricoDeSaudeComponent } from './historico-de-saude/historico-de-saude.component';
import { MonitoramentoComponent } from './monitoramento/monitoramento.component';
import { AlertasComponent } from './alertas/alertas.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagensComponent,
    TelaStartComponent,
    TelaHomeComponent,
    CadastroComponent,
    FormularioComponent,
    HistoricoDeSaudeComponent,
    MonitoramentoComponent,
    AlertasComponent,
    AccordionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

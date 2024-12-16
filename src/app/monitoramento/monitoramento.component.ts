import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.scss']
})
export class MonitoramentoComponent {
constructor(private router: Router) {}

    // Função para voltar para a TelaHome
    goBackToHome(): void {
      this.router.navigate(['/tela-start']);
    }
}

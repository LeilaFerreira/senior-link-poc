import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-historico-de-saude',
    templateUrl: './historico-de-saude.component.html',
    styleUrls: ['./historico-de-saude.component.scss'],
    standalone: false
})
export class HistoricoDeSaudeComponent {
constructor(private router: Router) {}

    // Função para voltar para a TelaHome
    goBackToHome(): void {
      this.router.navigate(['/tela-start']);
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent {
constructor(private router: Router) {}

    // Função para voltar para a TelaHome
    goBackToHome(): void {
      this.router.navigate(['/tela-start']);
    }
}

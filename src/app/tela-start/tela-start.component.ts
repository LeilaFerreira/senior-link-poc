import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-start',
  templateUrl: './tela-start.component.html',
  styleUrls: ['./tela-start.component.scss']
})
export class TelaStartComponent {

  title = 'senior-link-poc';


  constructor(private router: Router) {}

  // Função para voltar para a TelaHome
  goBackToHome(): void {
    this.router.navigate(['/home']);
  }


  // Informações do usuário
  usuario = {
    nome: 'José da Silva',
    fotoUrl: 'https://randomuser.me/api/portraits/men/69.jpg',  // URL de exemplo para a foto/avatar
    statusSaude: 'Saúde Estável',  // Status de saúde
    statusSaudeClass: 'status-estavel'  // Classe CSS para representar o status de saúde
  };

}

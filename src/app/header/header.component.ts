// header.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  // Informações do usuário
  usuario = {
    nome: 'José da Silva',
    fotoUrl: 'https://randomuser.me/api/portraits/men/69.jpg',  // URL de exemplo para a foto/avatar
    statusSaude: 'Estável',  // Status de saúde
    statusSaudeClass: 'status-estavel'  // Classe CSS para representar o status de saúde
  };

  constructor() { }

  ngOnInit(): void {
    // Você pode fazer uma chamada a um serviço para obter os dados do usuário real
  }

}

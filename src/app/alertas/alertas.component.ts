import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Alerta {
  tipo: 'medicacao' | 'consulta' | 'exame' | 'emergencia';
  mensagem: string;
  urgente: boolean;
  data: string;  // Data do alerta
  lido: boolean; // Se o alerta foi lido ou não
}

@Component({
    selector: 'app-alertas',
    templateUrl: './alertas.component.html',
    styleUrls: ['./alertas.component.scss'],
    standalone: false
})
export class AlertasComponent implements OnInit {
  alertas: Alerta[] = [
    { tipo: 'medicacao', mensagem: 'Hora de tomar o remédio X.', urgente: false, data: '15-12-2024 08:00', lido: false },
    { tipo: 'consulta', mensagem: 'Consulta com Dr. Y às 14:00.', urgente: false, data: '15-12-2024 09:00', lido: false },
    { tipo: 'exame', mensagem: 'Lembrete para exame de sangue amanhã às 9:00.', urgente: false, data: '15-12-2024 10:00', lido: false },
    { tipo: 'emergencia', mensagem: 'Pressão arterial elevada! Verifique.', urgente: true, data: '15-12-2024 07:30', lido: false },
  ];

  filtros: string = 'todos'; // Filtro de tipos de alertas
  tiposDeAlertas: string[] = ['todos', 'medicacao', 'consulta', 'exame', 'emergencia'];

  activeIndex: number = -1; // Nenhuma seção aberta inicialmente
  constructor(private router: Router) {}

  ngOnInit(): void { }

  // Método para marcar alerta como lido
  marcarComoLido(alerta: Alerta): void {
    alerta.lido = true;
  }

  // Método para remover alerta
  removerAlerta(alerta: Alerta): void {
    const index = this.alertas.indexOf(alerta);
    if (index > -1) {
      this.alertas.splice(index, 1);
    }
  }

  // Método para filtrar alertas
  filtrarAlertas(): Alerta[] {
    if (this.filtros === 'todos') {
      return this.alertas;
    }
    return this.alertas.filter(alerta => alerta.tipo === this.filtros);
  }

  // Ação imediata para emergências
  acionarAcaoImediata(): void {
    alert('Ação imediata: Chamando médico ou SOS!');
  }

  getCorAlerta(alerta: Alerta): string {
    if (alerta.urgente) {
      return 'red'; // Emergência (vermelho)
    } else if (alerta.tipo === 'consulta' || alerta.tipo === 'exame') {
      return 'yellow'; // Alerta de acompanhamento (amarelo)
    } else {
      return 'green'; // Normal (verde)
    }
  }

  // Função para voltar para a TelaHome
  goBackToHome(): void {
    this.router.navigate(['/tela-start']);
  }

    // Função para alternar a visibilidade das seções
    toggleAccordion(index: number): void {
      console.log('Index clicado:', index);
      if (this.activeIndex === index) {
        this.activeIndex = -1; // Fecha a seção se estiver aberta
      } else {
        this.activeIndex = index; // Abre a seção clicada
      }
    }

    isActive(index: number): boolean {
      return this.activeIndex === index;
    }
}

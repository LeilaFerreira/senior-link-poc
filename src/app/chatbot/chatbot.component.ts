import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ChatbotComponent {
  userInput: string = '';
  messages: Array<{ from: string; text: string }> = [];

  constructor(private router: Router) {}

  // Perguntas prontas e respostas
  botResponses: any = {
    'Olá': 'Olá! Como posso te ajudar?',
    'Qual o seu nome?': 'Sou um chatbot do Senior Link',
    'Há consultas nessa semana?': 'Sim, para o mês de abril de 2025, temos as seguintes consultas agendadas: 1ª semana (dia 7 abril): Consulta com o cardiologista no dia 3 de abril, às 14h. 2ª semana (8 a 30 de abril): Nenhuma consulta agendada. ',
    'O idoso teve alguma emergência durante o dia?': 'Hoje, dia 31 de março de 2025, o idoso não teve nenhuma emergência registrada até o momento. Caso surja alguma alteração, entraremos em contato imediatamente.',
    'O idoso teve febre hoje?': 'o idoso não apresentou febre. Ele se encontra bem, sem sintomas de gripe ou outras doenças no momento.',
    'Pode me informar quais são os remédios que preciso tomar às 14h?': 'Sim, você precisa tomar os seguintes remédios às 14h: Losartana 50mg para controle da pressão arterial. Metformina 500mg para controle de diabetes. Dipirona 500mg para dor (se necessário)."',
    'Quais são os hospitais próximos da minha casa?': 'Hospital São João - Rua das Flores, 123 - a 5 minutos de carro. Hospital Central - Av. dos Amigos, 456 - a 10 minutos de carro. Hospital de Urgências - Rua da Saúde, 789 - a 7 minutos de carro."',
    'Quais são as farmácias próximas da minha casa?': 'armácia Popular - Rua das Palmeiras, 22 - a 3 minutos de caminhada. Farmácia do Bairro - Av. Rio Branco, 56 - a 5 minutos de carro. Farmácia Central - Rua dos Coqueiros, 89 - a 7 minutos de caminhada."',
    'Ligar para emergência': 'Caso você precise de ajuda, posso ligar para os seguintes números: Emergência: 192 (Serviço de Atendimento Móvel de Urgência - SAMU).',
    'Ligar para meu filho': 'Caso você precise de ajuda, posso ligar para seu Filho: Ricardo, telefone: (XX) XXXX-XXXX."',
    'tchau': 'Até mais!'
  };

  // Função para enviar a mensagem
  sendMessage() {
    if (this.userInput.trim()) {
      // Adicionar a mensagem do usuário
      this.messages.push({ from: 'user', text: this.userInput });

      // Obter a resposta do bot
      const response = this.getBotResponse(this.userInput.trim());
      this.messages.push({ from: 'bot', text: response });

      // Limpar o campo de input
      this.userInput = '';
    }
  }

  // Função para obter a resposta do bot com base na mensagem do usuário
  getBotResponse(userMessage: string): string {
    return this.botResponses[userMessage] || 'Desculpe, não entendi sua pergunta.';
  }

  goBackToHome(): void {
    this.router.navigate(['/home']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinais-vitais',
  templateUrl: './sinais-vitais.component.html',
  styleUrls: ['./sinais-vitais.component.scss']
})
export class SinaisVitaisComponent implements OnInit {
  pressao: number = 120;
  frequenciaCardiaca: number = 72;
  temperatura: number = 36.6;
  oximetria: number = 98;

  ultimaAtualizacao: string = '';

  constructor() { }

  ngOnInit(): void {
    this.atualizarSinaisVitais();
  }

  atualizarSinaisVitais() {
    // Simulando a atualização dos sinais vitais a cada 5 segundos
    setInterval(() => {
      this.pressao = this.gerarValorPressao();
      this.frequenciaCardiaca = this.gerarValorFrequenciaCardiaca();
      this.temperatura = this.gerarTemperatura();
      this.oximetria = this.gerarOximetria();
      this.ultimaAtualizacao = new Date().toLocaleTimeString();
    }, 5000);
  }

  gerarValorPressao(): number {
    return Math.floor(Math.random() * (180 - 90 + 1)) + 90;  // Gera valor aleatório entre 90 e 180
  }

  gerarValorFrequenciaCardiaca(): number {
    return Math.floor(Math.random() * (100 - 60 + 1)) + 60;  // Gera valor aleatório entre 60 e 100
  }

  gerarTemperatura(): number {
    return parseFloat((36 + Math.random() * 2).toFixed(1));  // Gera valor aleatório entre 36 e 38
  }

  gerarOximetria(): number {
    return Math.floor(Math.random() * (100 - 90 + 1)) + 90;  // Gera valor aleatório entre 90 e 100
  }

  // Função para determinar a cor de acordo com os valores
  determinarCor(valor: number, tipo: string): string {
    if (tipo === 'pressao') {
      if (valor < 90) return 'red';  // Crítico
      if (valor < 120) return 'orange';  // Alerta
      return 'green';  // Normal
    }
    if (tipo === 'frequencia') {
      if (valor < 60) return 'red';  // Crítico
      if (valor < 80) return 'orange';  // Alerta
      return 'green';  // Normal
    }
    if (tipo === 'temperatura') {
      if (valor < 35) return 'red';  // Crítico
      if (valor < 37) return 'orange';  // Alerta
      return 'green';  // Normal
    }
    if (tipo === 'oximetria') {
      if (valor < 90) return 'red';  // Crítico
      if (valor < 95) return 'orange';  // Alerta
      return 'green';  // Normal
    }
    return 'green';  // Default
  }
  acionarAjuda():void{
    alert('Ação imediata: Chamando médico ou SOS!');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

    activeIndex: number = -1; // Nenhuma seção aberta inicialmente

    // Função para alternar a visibilidade das seções
    toggleAccordion(index: number): void {
      if (this.activeIndex === index) {
        this.activeIndex = -1; // Fecha a seção se estiver aberta
      } else {
        this.activeIndex = index; // Abre a seção clicada
      }
    }

    // Função para verificar se a seção está ativa
    isActive(index: number): boolean {
      return this.activeIndex === index;
    }
  }



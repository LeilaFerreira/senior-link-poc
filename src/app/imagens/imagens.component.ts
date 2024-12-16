import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.scss']
})
export class ImagensComponent  {


  imagens = [
    'assets/images/principal.jpg',
    'assets/images/principal2.jpg',
    'assets/images/principal3.jpg',
    'assets/images/principal.jpg'
  ];

  embaralharImagens() {
    for (let i = this.imagens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.imagens[i], this.imagens[j]] = [this.imagens[j], this.imagens[i]]; // Troca os elementos
    }
  }

  ngOnInit() {
    // Embaralha as imagens quando o componente é inicializado
    this.embaralharImagens();
  }


}

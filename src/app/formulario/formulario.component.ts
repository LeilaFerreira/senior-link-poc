// formulario.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formularioForm: FormGroup;

  imagens: string[] = [
    'assets/images/principal6.jpg',
    'assets/images/principal8.jpg',
    'assets/images/principal12.jpg',

  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioForm = this.fb.group({
      nome: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Embaralha as imagens quando o componente é inicializado
    this.embaralharImagens();
  }

  // Função para embaralhar as imagens
  embaralharImagens(): void {
    for (let i = this.imagens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.imagens[i], this.imagens[j]] = [this.imagens[j], this.imagens[i]]; // Troca os elementos
    }
  }

  // Obter controle do nome para facilitar o acesso no template
  get nome() {
    return this.formularioForm.get('nome');
  }

  onSubmit() {
    if (this.formularioForm.valid) {
      console.log('Formulário enviado:', this.formularioForm.value);
      this.router.navigate(['/tela-start']);

    }
  }
  goBackToHome(): void {
    this.router.navigate(['/home']);
  }

}

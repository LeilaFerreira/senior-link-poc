import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Criar o formulário reativo com validações
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Obter controle de email e senha para facilitar o acesso no template
  get email() {
    return this.cadastroForm.get('email');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  // Método chamado quando o formulário é enviado
  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Cadastro realizado:', this.cadastroForm.value);

      // Navegar para o próximo formulário (ou página)
      this.router.navigate(['/formulario']); // Substitua 'formulario' pela rota do formulário
    }
  }
}

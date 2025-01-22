import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Criar o formulário reativo com validações
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit(): void {
    // Caso você queira simular um formulário pré-preenchido (ou buscar dados de uma API, por exemplo)
    // Exemplo: Se o formulário já tiver dados (simulação)
    this.preencherFormulario();

    // Verificar se o formulário já está preenchido e habilitar o botão automaticamente
    if (this.cadastroForm.valid) {
      this.habilitarBotao();
    }
  }

  // Método para preencher o formulário com dados
  preencherFormulario(): void {
    // Simulando dados preenchidos automaticamente (substitua por lógica real se necessário)
    this.cadastroForm.patchValue({
      email: 'usuario@exemplo.com',
      senha: '123456'
    });
  }

  // Habilitar botão manualmente (se necessário)
  habilitarBotao(): void {
    if (this.cadastroForm.valid) {
      // O botão será habilitado automaticamente pelo Angular quando o formulário for válido
      // Adicionamos uma verificação extra para garantir que isso aconteça se a página for carregada com o formulário válido
      console.log('Botão habilitado');
    }
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tela-home',
    templateUrl: './tela-home.component.html',
    styleUrls: ['./tela-home.component.scss'],
    standalone: false
})
export class TelaHomeComponent {
  constructor(private router: Router) { }


  navigateToFormulario():void {
    this.router.navigate(['/formulario']);
  }
  // Método para navegar para outra página
  navigateToTelaStart(): void {
    this.router.navigate(['/tela-start']);
  }
}

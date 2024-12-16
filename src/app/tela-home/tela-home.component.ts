import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.scss']
})
export class TelaHomeComponent {
  constructor(private router: Router) { }

  // Método para navegar para outra página
  navigateToTelaStart(): void {
    this.router.navigate(['/tela-start']);
  }
}

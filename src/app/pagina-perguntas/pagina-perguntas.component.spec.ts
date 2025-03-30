import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPerguntasComponent } from './pagina-perguntas.component';

describe('PaginaPerguntasComponent', () => {
  let component: PaginaPerguntasComponent;
  let fixture: ComponentFixture<PaginaPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPerguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

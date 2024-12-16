import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeSaudeComponent } from './historico-de-saude.component';

describe('HistoricoDeSaudeComponent', () => {
  let component: HistoricoDeSaudeComponent;
  let fixture: ComponentFixture<HistoricoDeSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoDeSaudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoDeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

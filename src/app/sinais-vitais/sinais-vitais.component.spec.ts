import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaisVitaisComponent } from './sinais-vitais.component';

describe('SinaisVitaisComponent', () => {
  let component: SinaisVitaisComponent;
  let fixture: ComponentFixture<SinaisVitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinaisVitaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinaisVitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

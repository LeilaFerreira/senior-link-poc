import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaStartComponent } from './tela-start.component';

describe('TelaStartComponent', () => {
  let component: TelaStartComponent;
  let fixture: ComponentFixture<TelaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

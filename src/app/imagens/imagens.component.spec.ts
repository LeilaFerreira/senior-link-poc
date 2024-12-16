import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensComponent } from './imagens.component';

describe('ImagensComponent', () => {
  let component: ImagensComponent;
  let fixture: ComponentFixture<ImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

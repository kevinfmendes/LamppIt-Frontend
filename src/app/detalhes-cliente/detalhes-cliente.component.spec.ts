import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClienteComponent } from './detalhes-cliente.component';

describe('DetalhesClienteComponent', () => {
  let component: DetalhesClienteComponent;
  let fixture: ComponentFixture<DetalhesClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesClienteComponent]
    });
    fixture = TestBed.createComponent(DetalhesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalContactoComponent } from './adicional-contacto.component';

describe('AdicionalContactoComponent', () => {
  let component: AdicionalContactoComponent;
  let fixture: ComponentFixture<AdicionalContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionalContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionalContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

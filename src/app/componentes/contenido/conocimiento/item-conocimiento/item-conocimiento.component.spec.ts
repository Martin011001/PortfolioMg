import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConocimientoComponent } from './item-conocimiento.component';

describe('ItemConocimientoComponent', () => {
  let component: ItemConocimientoComponent;
  let fixture: ComponentFixture<ItemConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemConocimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

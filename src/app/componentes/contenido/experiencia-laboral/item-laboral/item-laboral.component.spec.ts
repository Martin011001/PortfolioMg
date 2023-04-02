import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLaboralComponent } from './item-laboral.component';

describe('ItemLaboralComponent', () => {
  let component: ItemLaboralComponent;
  let fixture: ComponentFixture<ItemLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdataeditorComponent } from './productdataeditor.component';

describe('ProductdataeditorComponent', () => {
  let component: ProductdataeditorComponent;
  let fixture: ComponentFixture<ProductdataeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdataeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdataeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

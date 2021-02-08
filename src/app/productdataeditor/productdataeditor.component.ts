import { ProductServiceService } from './../service/product-service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-productdataeditor',
  templateUrl: './productdataeditor.component.html',
  styleUrls: ['./productdataeditor.component.scss']
})
export class ProductdataeditorComponent implements OnInit {

  @Input() list: any[];
  @Input() cols: any [];

  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  dataList: any = {};
  newRow: any = {};

  constructor(
    private tablist: ProductServiceService
  ) { }


  ngOnInit(): void {

  }

  onUpdate(row): void {
    this.update.emit(row);
  }

  onDelete(row): void {
    if(confirm("Biztos, hogy törölni akarja?")) {
       this.delete.emit(row);
    }
  }

  onCreate(row): void {
    this.create.emit(row);
  }


}

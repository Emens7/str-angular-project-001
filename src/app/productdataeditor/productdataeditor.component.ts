import { ProductServiceService } from './../service/product-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productdataeditor',
  templateUrl: './productdataeditor.component.html',
  styleUrls: ['./productdataeditor.component.scss']
})
export class ProductdataeditorComponent implements OnInit {

  @Input() list: any[];
  @Input() cols: any [];


  dataList: any = {};

  constructor(
    private tablist: ProductServiceService
  ) { }


  ngOnInit(): void {

  }


}

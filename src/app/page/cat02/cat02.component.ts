import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  category = [];

  categoryList = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.actionRandomFive().then(data => {
      this.category = data;
    });
    this.productService.actionList().then(data => {
      this.categoryList = data;
    });
  }

}

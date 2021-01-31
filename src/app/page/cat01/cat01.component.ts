import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  category = [];

  categoryList = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.category = this.productService.comedyRandomFive();
    this.categoryList = this.productService.comedyList();
  }

}

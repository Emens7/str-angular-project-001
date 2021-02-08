import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss']
})
export class Cat03Component implements OnInit {

  category = [];

  categoryList = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.animationRandomFive().then(data => {
      this.category = data;
    });
    this.productService.animationList().then(data => {
      this.categoryList = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-cat04',
  templateUrl: './cat04.component.html',
  styleUrls: ['./cat04.component.scss']
})
export class Cat04Component implements OnInit {

  category = [];

  categoryList = [];

  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.productService.adventureRandomFive().then(data => {
      this.category = data;
    });
    this.productService.adventureList().then(data => {
      this.categoryList =  data;
    });
  }

}

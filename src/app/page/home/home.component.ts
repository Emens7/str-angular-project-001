import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];

  discounts = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

    this.productService.homeFeaturedFive().then(data => {
      this.products = data;
    });

    this.productService.homeRandomFive().then(data => {
      this.discounts = data;
    });
  }

}

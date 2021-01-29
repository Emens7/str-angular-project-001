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

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.homeFeaturedFive();
  }

}

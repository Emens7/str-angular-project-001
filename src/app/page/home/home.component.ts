import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.filter(item => item.featured == true)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    )
  );

  discounts$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.sort(() => Math.random() - 0.5)
    .slice(0, 10)
    )
  );;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

    this.productService.getAllMovie();

  }

}

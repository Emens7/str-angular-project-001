import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-cat04',
  templateUrl: './cat04.component.html',
  styleUrls: ['./cat04.component.scss']
})
export class Cat04Component implements OnInit {

  category$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.filter(item => item.catId == 12 && item.featured == true)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    )
  );

  categoryList$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.filter(item => item.catId == 12)
    )
  );

  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.productService.getAllMovie();
  }

}

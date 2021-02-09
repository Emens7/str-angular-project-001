import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allFilms$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.sort((a, b) => a.name.localeCompare(b.name))
    )
  );

  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.productService.getAllMovie();
  }

}

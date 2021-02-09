import { ProductServiceService } from './../../service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Subscription, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Product } from '../../model/product';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cols: any[] = [];

  list$: Observable<Product[]> = this.productService.list$.pipe(
    map((products: Product[]) => products.sort((a, b) => a.name.localeCompare(b.name))
    )
  );

  searchTerm: string = '';
  order: string = 'abc';
  filter: string = 'all';

  constructor(
    private productService: ProductServiceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.productService.getAllMovie()
    this.cols = this.config.cols;
  }

  ngOnDestroy() {

  }

  onUpdate(row: Product): void {

    this.productService.update(row);
  }

  onDelete(row: Product): void {

    this.productService.delete(row);
  }

  onCreate(row: any): void {
    this.productService.create(row);
  }

  searchEvent(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  orderSelected(event) {
    this.order = (event.target as HTMLInputElement).value;
  }

  filterSelected(event) {
    this.filter = (event.target as HTMLInputElement).value;
  }

}

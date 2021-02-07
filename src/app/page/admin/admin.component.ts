import { ProductServiceService } from './../../service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cols: any[] = [];
  list: any[] = [];
  listSubscription: Subscription;

  searchTerm: string = '';
  order: string = 'abc';
  filter: string = 'all';

  constructor(
    private productService: ProductServiceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.listSubscription = this.productService.getAllMovie().subscribe(
      list => this.list = list,
      err => console.error(),
      () => console.log('unsubscribed')
    );
    this.cols = this.config.cols;
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

  onUpdate(row: Product): void {

    this.productService.update('movies', row);
  }

  onDelete(row: Product): void {

    this.productService.delete('movies', row);
  }

  onCreate(row: any): void {
    this.productService.create('movies', row);
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

import { ProductServiceService } from './../../service/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cols: any[] = [];
  list: any[] = [];

  searchTerm: string = '';
  order: string = 'abc';
  filter: string = 'all';

  constructor(
    private productService: ProductServiceService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.list = this.productService.allFilms();
    this.cols = this.config.cols;
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

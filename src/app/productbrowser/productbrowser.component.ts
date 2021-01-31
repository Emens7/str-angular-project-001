import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-productbrowser',
  templateUrl: './productbrowser.component.html',
  styleUrls: ['./productbrowser.component.scss']
})
export class ProductbrowserComponent implements OnInit {

  @Input() products;

  searchTerm: string = '';
  order: string = 'abc';
  filter: string = 'all';

  constructor() { }

  ngOnInit(): void {
    
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

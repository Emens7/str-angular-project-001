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

  constructor() { }

  ngOnInit(): void {
    
  }

  searchEvent(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

}

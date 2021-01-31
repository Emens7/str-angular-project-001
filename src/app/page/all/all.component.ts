import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allFilms = [];

  order: string = 'abc';

  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.allFilms = this.productService.allFilms();
  }

  orderSelected(event) {
    this.order = (event.target as HTMLInputElement).value;
  }

}

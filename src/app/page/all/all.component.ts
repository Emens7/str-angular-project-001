import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allFilms = [];

  constructor(private productService: ProductServiceService ) { }

  ngOnInit(): void {
    this.allFilms = this.productService.allFilms();
  }

}

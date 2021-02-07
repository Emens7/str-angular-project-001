import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss']
})
export class SinglepageComponent implements OnInit {

  singleFilm: [];

  constructor(private producService: ProductServiceService) { }

  ngOnInit(): void {
  }

}

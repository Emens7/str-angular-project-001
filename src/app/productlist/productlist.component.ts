import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  @Input()
  products;

  constructor() { }

  ngOnInit(): void {
  }

}

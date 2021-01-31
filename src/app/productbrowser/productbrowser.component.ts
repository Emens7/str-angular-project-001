import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbrowser',
  templateUrl: './productbrowser.component.html',
  styleUrls: ['./productbrowser.component.scss']
})
export class ProductbrowserComponent implements OnInit {

  @Input() products;

  constructor() { }

  ngOnInit(): void {
  }

}

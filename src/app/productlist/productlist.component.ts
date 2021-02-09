import { Component, Input, OnInit,} from '@angular/core';
import { Product } from '../model/product';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  _products: Product[];

  get products(): Product[] {
    return this._products;
  }

  @Input() set products(value: Product[]) {
    this._products = this.chunkArray(value, 5);
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    this.normalizeSlideHeights();

    $('.carousel-btn-next').on('click', function (e) {
      $(this).closest('.product-carousel').children('.carousel').carousel('next');
    });

    $('.carousel-btn-prev').on('click', function(e) {
      $(this).closest('.product-carousel').children('.carousel').carousel('prev');
    });

    $(window).on('resize orientationchange', this.normalizeSlideHeights);

  }

  //Magasságok "igazítása"
  normalizeSlideHeights() {
    $('.carousel').each(function(){
      const items = $('.carousel-item', this);

      items.css('min-height', 0);

      const maxHeight = Math.max.apply(null, items.map(function(){
        return $(this).outerHeight()}).get()
      );

      items.css('min-height', maxHeight + 'px');
    })
}

  /**
   * Feldarabolja a tömböt megadott méretű részekre
   * @param arr
   * @param size
   */
  chunkArray(arr: any[], size: number): any[] {
    if (arr != null) {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    }
    return [];
  }

}

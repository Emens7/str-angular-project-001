import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(list: any[], searchTerm: string): any[] {
    if (!Array.isArray(list) || !searchTerm) {
      return list;
    }

    searchTerm = searchTerm.toLocaleLowerCase();

    return list.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchTerm);
    });
      
  }

}

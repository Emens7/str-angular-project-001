import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyfilter'
})
export class PropertyfilterPipe implements PipeTransform {

  transform(list: any[], filter: string): any[] {
    if (!Array.isArray(list) || !filter) {
      return list;
    }

    if (filter == 'featured') {

      return list.filter((item) => item.featured);

    } else if (filter == 'stock') {
      return list.filter((item) => item.stock);
    }

    return list;
    
  }
}

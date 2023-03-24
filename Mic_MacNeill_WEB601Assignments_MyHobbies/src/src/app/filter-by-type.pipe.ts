import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(content: Content[], type?: string) {
    
    //Filter out content if nothing is available
    if (!content) {
      return null;
    } 
    
    //Filter content to showcase what is available
    return content.filter((card) => {
      return card.type?.toLowerCase() === type?.toLowerCase();
    });
    
  }

}
//made by: Michael MacNeill
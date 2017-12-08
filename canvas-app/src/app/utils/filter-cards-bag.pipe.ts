import { Pipe, PipeTransform } from '@angular/core';
import {CardData} from "../canvas/components/card-canvas/cardData";

@Pipe({
  name: 'filterCardsBag',
  pure: false
})
export class FilterCardsBagPipe implements PipeTransform {

  transform(list: CardData[], bag: number): any {
    if (!list) {
      return null;
    } else if (!bag) {
      return list;
    } else {
      return list.filter(data => data.bag === bag);
    }
  }

}

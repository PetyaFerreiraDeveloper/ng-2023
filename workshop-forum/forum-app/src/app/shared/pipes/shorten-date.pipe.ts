import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'shortenDate'
})
export class ShortenDatePipe implements PipeTransform {

  transform(dateString: string): string {
    return moment(dateString).format('MMM Do YYYY');
  }

}

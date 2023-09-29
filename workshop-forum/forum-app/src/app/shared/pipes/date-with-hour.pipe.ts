import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateWithHour'
})
export class DateWithHourPipe implements PipeTransform {

  transform(dateString:string): string {
    return moment(dateString).format('YYYY-MM-DD, hh:mm:ss a');
  }

}

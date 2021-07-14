import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deadlineDate'
})
export class DeadlineDatePipe implements PipeTransform {

  transform(value: any) {
    var date = new Date()
    if (value > 0) {
      date.setDate(date.getDate() + value)
      return date.toDateString()

    }
    return "-"
  }

}

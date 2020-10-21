import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 10, trail = "..."): string {
    let stringValue = value.length > limit ? value.substring(0, limit) + trail : value;
    return stringValue;
  }

}

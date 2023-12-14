import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string, separator = ' '): string {
    if (value == null) {
      return value;
    }
    if (typeof value !== 'string') {
      throw new Error('Please give a string value.');
    }
    return value.replaceAll('.', separator);
  }
}

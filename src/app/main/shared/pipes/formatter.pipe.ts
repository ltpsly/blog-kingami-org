import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const arr = value.split('\\n');
    value = arr.join('\n').replace('\\t', '  ');
    return value;
  }

}

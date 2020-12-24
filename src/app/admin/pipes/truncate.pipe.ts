import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, len: number = 30, character: string = '...'): string {
    return text.length > len ? text.slice(0, len).concat(character) : text;
  }
}

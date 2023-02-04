import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    // Asi seria de la manera tradicional
    // let reverseString = '';
    // for (let a = value.length - 1; a >= 0; a--) {
    //   reverseString += value[a];
    // }
    // return reverseString;
    // Una forma mas rapida de hacer esto seria de la sig man
    return value.split('').reverse().join('');
  }
}

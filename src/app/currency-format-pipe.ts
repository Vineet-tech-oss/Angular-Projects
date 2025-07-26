import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 10000000) {
      return '₹' + (value / 10000000).toFixed(1) + ' Cr';
    } else if (value >= 100000) {
      return '₹' + (value / 100000).toFixed(1) + ' L';
    } else if (value >= 1000) {
      return '₹' + (value / 1000).toFixed(1) + ' K';
    }
    return '₹' + value.toLocaleString('en-IN');
  }
}

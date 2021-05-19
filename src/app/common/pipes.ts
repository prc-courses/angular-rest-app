import { Pipe, PipeTransform } from '@angular/core';
import { Widget } from './widgets.service';

/*
 * Filter array of Widgets.
 * Usage:
 *   value | filterWidgets:filter
 * Example:
 *   {{ list | filterWidgets:abc }}
*/
@Pipe({name: 'filterWidgets'})
export class FilterWidgetsPipe implements PipeTransform {
  transform(value: Widget[], filter: string): Widget[] {
    const lfilter = filter.toLowerCase();
    return value ? value.filter(v => v.name.toLowerCase().includes(lfilter)) : [];
  }
}

/*
 * Filter array of strings.
 * Usage:
 *   value | filterArray:filter
 * Example:
 *   {{ list | filterArray:abc }}
*/
@Pipe({name: 'filterArray'})
export class FilterArrayPipe implements PipeTransform {
  transform(value: string[], filter: string): string[] {
    return value ? value.filter(v => v.includes(filter)) : [];
  }
}

/*
 * Widget array to string array.
 * Usage:
 *   value | widgetNames
 * Example:
 *   {{ widgets | widgetNames }}
*/
@Pipe({name: 'widgetNames'})
export class WidgetNamesPipe implements PipeTransform {
  transform(value: Widget[]): string[] {
    return value ? value.map(v => v.name) : [];
  }
}

import { AbstractControl, ValidatorFn } from '@angular/forms';


export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbiddenNames = [
      'kill', 'covid', 'pandemic', 'wtf', 'sex', 'racism'
    ]

    const forbidden = typeof control.value == 'string' && forbiddenNames.find(name => control.value.toLowerCase().includes(name)) !== undefined;
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
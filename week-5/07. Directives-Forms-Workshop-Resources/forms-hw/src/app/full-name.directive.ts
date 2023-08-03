import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appFullName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FullNameDirective,
      multi: true,
    },
  ],
})
export class FullNameDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regex = /^[A-Z][a-z]+\s[A-Z][a-z]+/gm;

    let inputFieldValue = control.value;

    if (inputFieldValue == '' || regex.test(inputFieldValue)) return null;

    return {
      appFullName:
        'Please fill first and last names starting with capital letters',
    };
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}

import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPhoneValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidationDirective,
      multi: true,
    },
  ],
})
export class PhoneValidationDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regex = /^\d{9}$/gm;
    if (control.value == '' || regex.test(control.value)) return null;
    return {
      appPhoneValidation: 'Phone number must contain nine digits',
    };
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}

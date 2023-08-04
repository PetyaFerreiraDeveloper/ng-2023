import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appRePassValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RePassValidationDirective,
      multi: true,
    },
  ],
})
export class RePassValidationDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const passwordValue = control['_parent'].value['password'];
    if (control.value == '' || control.value == passwordValue) return null;

    return {
      appRePassValidation: 'Password and Re-Password must match',
    };
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}

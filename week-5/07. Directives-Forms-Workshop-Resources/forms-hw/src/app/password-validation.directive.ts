import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidationDirective,
      multi: true
    }
  ]
})
export class PasswordValidationDirective implements Validator{

  

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const regex = /^[A-Za-z\d]{3,16}$/gm
    if(control.value == '' || regex.test(control.value)) return null
    return {
      appPasswordValidation: 'Password must be between 3 and 16 symbols and must contain only letters and digits.'
    }
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}

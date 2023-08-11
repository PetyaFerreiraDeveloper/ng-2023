import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { sameValueGroupValidator } from './match-password-group-validator'
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true
    }
  ]
})
export class MatchPasswordDirective implements OnChanges, Validator {
  @Input() appMatchPassword: string[] = []
  
  validator: ValidatorFn = () => null

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const passwordChange = changes['appMatchPassword']
    if (passwordChange) {
      
    }
    throw new Error('Method not implemented.');
  }

}

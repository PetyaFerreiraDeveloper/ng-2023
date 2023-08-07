import { ValidatorFn } from '@angular/forms';

// export const appEmailValidator: ValidatorFn = (control: AbstractControl) => {
//     return /^[^@]{6,}@gmail\.(com|bg)$/gm
// }

export function appEmailValidator(domains: string[]): ValidatorFn {
//   /^[^@]{6,}@gmail\.(com|bg)$/gm;
  const domainString = domains.join('|');
  const regex = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`);
  return (control) => {
    return (control.value === '' || regex.test(control.value))
      ? null
      : {
          appEmailValidator: true,
        };
  };
}

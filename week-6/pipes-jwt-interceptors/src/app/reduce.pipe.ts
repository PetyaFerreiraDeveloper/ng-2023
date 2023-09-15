import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: false // it will be called every time the component rerenders
})
export class ReducePipe<T, I> implements PipeTransform {
  transform(
    array: any[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: I
  ): any {
    if (initialValue !== undefined) {
      return array?.reduce(reduceFn, initialValue);
    }

    return array?.reduce(reduceFn);

  }
}

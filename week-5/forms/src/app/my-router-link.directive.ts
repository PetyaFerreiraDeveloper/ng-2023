import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnDestroy {
  unsubs: (() => void)[] = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(elementRef);
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseover',
        this.mouseOverHandler
      )
    );
    this.unsubs.push(
      this.renderer.listen(
        this.elementRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler
      )
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'data-test',
      '123'
    );
  }

  mouseOverHandler = (e: MouseEvent) => {
    console.log('clicked');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  };

  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'initial');
  };

  ngOnDestroy(): void {
    this.unsubs.forEach((fn) => fn());
  }
}

import {
  Directive,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIfDirective implements OnChanges {
  @Input() appMyIf = false;
  @Input() template!:
    | TemplateRef<{ value: string; $implicit: number }>
    | undefined;

  constructor(
    @Optional()
    private templateRef: TemplateRef<{ value: string; $implicit: number }>,
    private vc: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appMyIf) {
      const template = this.templateRef || this.template;
      if (!template) return;
      this.vc.createEmbeddedView(template, {
        value: ' TESTING 123...',
        $implicit: 12345,
      });
    } else {
      this.vc.clear();
    }
  }
}

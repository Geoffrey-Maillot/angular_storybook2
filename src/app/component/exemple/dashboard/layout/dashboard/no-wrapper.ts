import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[noWrapper]',
  standalone: true,
})
export class NoWrapper {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}

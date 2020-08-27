import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '#app-container',
})
export class ContainerDirective {
  constructor(private el: ElementRef) {}

  get width(): number {
    return this.el.nativeElement.offsetWidth;
  }
}

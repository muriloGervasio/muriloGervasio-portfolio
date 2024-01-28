import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[insideViewport]',
  standalone: true,
})
export class InsideViewportDirective {
  @Output() onView = new EventEmitter<boolean>();
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  public onScrollBy(): void {
    const windowHeight = window.innerHeight;
    const boundedRect = this.elementRef.nativeElement.getBoundingClientRect();
    const isVisible =
      boundedRect.top >= 0 && boundedRect.bottom <= windowHeight;

    this.onView.emit(isVisible);
  }
}

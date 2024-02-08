import { HostListener, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MousePositionService {
  x = signal(0);
  y = signal(0);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    console.log(e.x, e.y);
    this.x.set(e.x);
    this.y.set(e.y);
  }
}

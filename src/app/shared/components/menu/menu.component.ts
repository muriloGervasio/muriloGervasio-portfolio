import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslocoDirective, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input({ required: true }) set menuItem(value: number) {
    this.selectedItemIndex.set(value);
  }

  @Output() select = new EventEmitter<number>();

  readonly menuItems: MenuItem[] = [
    { label: 'aboutMe', description: '/about-me' },
    { label: 'experience', description: '/home' },
    { label: 'projects', description: '/my-pages' },
  ];

  readonly selectedItemIndex = signal(0);

  readonly selectedItem = computed(
    () => this.menuItems[this.selectedItemIndex()],
  );

  selectItem(index: number): void {
    this.selectedItemIndex.set(index);
    this.select.emit(index);
  }
}

interface MenuItem {
  label: string;
  description: string;
}

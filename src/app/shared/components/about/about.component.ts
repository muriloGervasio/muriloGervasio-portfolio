import { Component } from '@angular/core';
import { TranslocoDirective, TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}

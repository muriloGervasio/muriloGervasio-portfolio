import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  standalone: true,
  imports: [TranslocoModule],
})
export class AboutMeComponent implements OnInit {
  constructor() {}
  readonly year = new Date().getFullYear() - 2019;
  ngOnInit() {}
}

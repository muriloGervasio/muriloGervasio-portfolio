import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslocoModule} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslocoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'muriloGervasio-portfolio';
}

import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { MyPagesComponent } from './shared/components/my-pages/my-pages.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { InsideViewportDirective } from './shared/directives/on-view.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    AboutMeComponent,
    MyPagesComponent,
    TranslocoModule,
    MenuComponent,
    ProjectsComponent,
    AboutComponent,
    ExperienceComponent,
    InsideViewportDirective,
    MatSlideToggleModule,
    MatButtonModule,
    MatRippleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly transloco = inject(TranslocoService);
  @ViewChild('about') private readonly aboutComponent!: ElementRef;
  @ViewChild('experience')
  private readonly experienceComponent!: ElementRef;
  @ViewChild('projects') private readonly projectsComponent!: ElementRef;
  constructor() {
    effect(() => {
      console.log(this.isPt());
      this.transloco.setActiveLang(this.isPt() ? 'pt' : 'en');
    });
  }

  readonly icons: string[] = ['linkedin', 'instagram', 'github'];

  isPt = signal(true);

  ngOnInit() {
    this.loadIcons();
  }

  onView: WritableSignal<Record<EMenuItem, boolean>> = signal({
    [EMenuItem.about]: true,
    [EMenuItem.experience]: false,
    [EMenuItem.projects]: false,
  });

  private loadIcons(): void {
    this.icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${icon}.svg`,
        ),
      );
    });
  }

  updateView(item: EMenuItem, value: boolean): void {
    this.onView.set({ ...this.onView(), [item]: value });
  }

  upperOnView = computed(() => {
    const firstOnView = Object.entries(this.onView()).find(
      ([, value]) => value,
    );

    if (!firstOnView) return EMenuItem.about;

    return Number(firstOnView[0]);
  });

  scrollTo(item: EMenuItem): void {
    console.log(item);
    console.log(this.aboutComponent);
    switch (item) {
      case EMenuItem.about:
        this.aboutComponent.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case EMenuItem.experience:
        this.experienceComponent.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case EMenuItem.projects:
        this.projectsComponent.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
    }
  }

  protected readonly EMenuItem = EMenuItem;

  toggleLanguage(value: boolean): void {
    this.isPt.set(value);
  }

  language = computed(() => (this.isPt() ? 'pt-BT' : 'en-US'));
}

export enum EMenuItem {
  about,
  experience,
  projects,
}

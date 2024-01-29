import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './shared/services/transloco.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'pt'],
        defaultLang: 'pt',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideAnimations(),
    { provide: APP_BASE_HREF, useValue: '/portfolio' },
  ],
};

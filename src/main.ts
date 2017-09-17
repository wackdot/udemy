
// Manages Typescript imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 1. At start up the AppModule (app.module.ts) is added 
platformBrowserDynamic().bootstrapModule(AppModule);

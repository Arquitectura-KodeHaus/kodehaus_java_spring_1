import 'zone.js/node'; // Zone.js en SSR

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config.server';
import type { BootstrapContext } from '@angular/platform-server';

export default (context: BootstrapContext) =>
  bootstrapApplication(App, appConfig, { context });

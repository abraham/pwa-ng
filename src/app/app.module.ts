import 'node-package';
import 'img-2';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CBComponent } from './c-b/c-b.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { ComingSoonComponent } from './coming-soon.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';
import { PwaStepComponent } from './pwa-step/pwa-step.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { appRoutes } from './routes';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CBComponent,
    CodeBlockComponent,
    ComingSoonComponent,
    PwaInstallComponent,
    PwaManifestComponent,
    PwaStepComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

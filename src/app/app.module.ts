import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatListModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CodeBlockComponent } from './code-block/code-block.component';
import { PwaStepComponent } from './pwa-step/pwa-step.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeBlockComponent,
    PwaStepComponent,
    PwaInstallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

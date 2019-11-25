import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import WebFont from 'webfontloader';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { CBComponent } from './c-b/c-b.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { ComingSoonComponent } from './coming-soon.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';
import { PwaStepComponent } from './pwa-step/pwa-step.component';
import { ShareComponent } from './share/share.component';


WebFont.load({
  google: {
    families: ['Roboto', 'Roboto Mono', 'Material Icons'],
  },
});

@NgModule({
  declarations: [
    AppComponent,
    CBComponent,
    CodeBlockComponent,
    ComingSoonComponent,
    FirebaseComponent,
    PwaInstallComponent,
    PwaManifestComponent,
    PwaStepComponent,
    ShareComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

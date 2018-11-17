import { Routes } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';

interface Nav {
  label: string;
  path: string;
  pathMatch?: string;
}

export const nav: Nav[] = [
  { path: '', label: 'Install', pathMatch: 'full' },
  { path: 'manifest', label: 'Manifest' },
  { path: 'firebase', label: 'Firebase' },
];

export const routes: Routes = [
  { path: '', component: PwaInstallComponent, pathMatch: 'full' },
  { path: 'manifest', component: PwaManifestComponent },
  { path: 'firebase', component: FirebaseComponent },
];

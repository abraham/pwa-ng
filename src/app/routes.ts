import { Route, Routes } from '@angular/router';

import { ComingSoonComponent } from './coming-soon.component';
import { Component } from '@angular/core';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';

interface Nav {
  label: string;
  path: string;
  pathMatch?: string;
}

export const appNav: Nav[] = [
  { path: '', pathMatch: 'full', label: 'Install' },
  { path: 'manifest', label: 'Manifest' },
  { path: 'firebase', label: 'Firebase' },
  { path: 'lighthouse', label: 'Lighthouse' },
  { path: 'assets', label: 'Assets' },
];

// TODO: Aditional guides to consider.
// SSR
// CI

export const appRoutes: Routes = [
  { path: '', component: PwaInstallComponent, pathMatch: 'full' },
  { path: 'manifest', component: PwaManifestComponent },
  { path: 'firebase', component: ComingSoonComponent },
  { path: 'lighthouse', component: ComingSoonComponent },
  { path: 'assets', component: ComingSoonComponent },
];

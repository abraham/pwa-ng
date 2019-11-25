import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CBComponent } from '../c-b/c-b.component';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { PwaStepComponent } from '../pwa-step/pwa-step.component';
import { PwaManifestComponent } from './pwa-manifest.component';

const routes: Routes = [
  {
    path: '',
    component: PwaManifestComponent
  },
];

@NgModule({
  declarations: [
    PwaManifestComponent,
    PwaStepComponent,
    CBComponent,
    CodeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PwaManifestModule { }

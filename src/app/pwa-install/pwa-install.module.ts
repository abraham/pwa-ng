import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CBComponent } from '../c-b/c-b.component';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { PwaStepComponent } from '../pwa-step/pwa-step.component';
import { PwaInstallComponent } from './pwa-install.component';

const routes: Routes = [
  {
    path: '',
    component: PwaInstallComponent
  },
];

@NgModule({
  declarations: [
    PwaInstallComponent,
    PwaStepComponent,
    CBComponent,
    CodeBlockComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PwaInstallModule { }

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CBComponent } from '../c-b/c-b.component';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { StepComponent } from '../step/step.component';
import { ManifestComponent } from './manifest.component';

const routes: Routes = [
  {
    path: '',
    component: ManifestComponent
  },
];

@NgModule({
  declarations: [
    ManifestComponent,
    StepComponent,
    CBComponent,
    CodeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManifestModule { }

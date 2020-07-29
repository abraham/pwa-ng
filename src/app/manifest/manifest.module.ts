import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManifestModule { }

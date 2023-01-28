import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FirebaseComponent } from './firebase.component';

const routes: Routes = [
  {
    path: '',
    component: FirebaseComponent,
  },
];

@NgModule({
  declarations: [FirebaseComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FirebaseModule {}

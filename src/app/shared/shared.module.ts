import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CBComponent } from '../c-b/c-b.component';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { StepComponent } from '../step/step.component';

@NgModule({
  declarations: [
    CBComponent,
    CodeBlockComponent,
    StepComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CBComponent,
    CodeBlockComponent,
    StepComponent,
  ]
})
export class SharedModule { }

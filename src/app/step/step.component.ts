import { Component, Input } from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent {
  @Input() title = '';
}

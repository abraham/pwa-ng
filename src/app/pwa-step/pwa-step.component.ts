import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pwa-step',
  templateUrl: './pwa-step.component.html',
  styleUrls: ['./pwa-step.component.css']
})
export class PwaStepComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ContainerDirective } from '../container.directive';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css'],
})
export class FirebaseComponent implements OnInit {
  private imgRatio = 1978 / 3104;

  @Input() imgWidth?: number;
  @Input() imgHeight?: number;

  constructor(private container: ContainerDirective) {}

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.imgWidth = this.container.width - 16;
      this.imgHeight = this.imgWidth * this.imgRatio;
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ContainerDirective } from '../container.directive';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {
  private imgRatio = 1978 / 3104;

  @Input() imgWidth?: number;
  @Input() imgHeight?: number;

  constructor(private container: ContainerDirective) { }

  ngOnInit() {
    requestAnimationFrame(() => {
      this.imgWidth = this.container.width - 16;
      this.imgHeight = this.imgWidth * this.imgRatio;
    });
  }
}

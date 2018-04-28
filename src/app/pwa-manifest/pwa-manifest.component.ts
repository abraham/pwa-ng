import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-manifest',
  templateUrl: './pwa-manifest.component.html',
  styleUrls: ['./pwa-manifest.component.css']
})
export class PwaManifestComponent implements OnInit {
  private imgRatio = 1978 / 3104;
  private defaultWidth = 960;
  private defaultHeight = this.defaultWidth * this.imgRatio;

  @Input() imgWidth: number;
  @Input() imgHeight: number;

  constructor() { }

  ngOnInit() {
    requestAnimationFrame(() => {
      this.imgWidth = this.containerWidth - 16;
      this.imgHeight = this.imgWidth * this.imgRatio;
    });
  }

  private get containerWidth(): number {
    return (document.querySelector('#container') as HTMLDivElement).offsetWidth;
  }
}

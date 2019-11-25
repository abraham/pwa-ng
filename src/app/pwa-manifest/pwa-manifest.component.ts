import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-manifest',
  templateUrl: './pwa-manifest.component.html',
  styleUrls: ['./pwa-manifest.component.css']
})
export class PwaManifestComponent implements OnInit {
  private imgRatio = 1978 / 3104;

  @Input() imgWidth: number;
  @Input() imgHeight: number;

  ngOnInit() {
    requestAnimationFrame(() => {
      this.imgWidth = this.containerWidth - 16;
      this.imgHeight = this.imgWidth * this.imgRatio;
    });
  }

  private get containerWidth(): number {
    return document.querySelector<HTMLDivElement>('#container').offsetWidth;
  }
}

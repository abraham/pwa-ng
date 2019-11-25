import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pwa-install',
  templateUrl: './pwa-install.component.html',
  styleUrls: ['./pwa-install.component.css']
})
export class PwaInstallComponent implements OnInit {
  private imgRatio = 821 / 1392;

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
    return document.querySelector<HTMLDivElement>('#container').offsetWidth;
  }
}

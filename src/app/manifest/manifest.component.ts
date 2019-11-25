import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {
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

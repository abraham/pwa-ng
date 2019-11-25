import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {
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

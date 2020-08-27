import { Component, OnInit, Input } from '@angular/core';
import { ContainerDirective } from '../container.directive';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css']
})
export class InstallComponent implements OnInit {
  private imgRatio = 821 / 1392;

  @Input() imgWidth?: number;
  @Input() imgHeight?: number;

  constructor(private container: ContainerDirective) { }

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.imgWidth = this.container.width - 16;
      this.imgHeight = this.imgWidth * this.imgRatio;
    });
  }
}

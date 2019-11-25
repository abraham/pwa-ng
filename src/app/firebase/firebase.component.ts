import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
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

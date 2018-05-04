import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MDCTab, MDCTabFoundation } from '@material/tabs';
import { MDCTabBar, MDCTabBarFoundation } from '@material/tabs';
import { MDCTabBarFoundationScroller, MDCTabBarScroller } from '@material/tabs';

import { nav } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav') nav: ElementRef;

  public appNav = nav;
  private tabBarScroller: MDCTabBarScroller;

  constructor() { }

  ngAfterViewInit() {
    this.tabBarScroller = new MDCTabBarScroller(this.nav.nativeElement);
  }
}

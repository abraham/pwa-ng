import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MDCTabBarScroller } from '@material/tabs';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  public appRoutes = routes;
  private tabBarScroller?: MDCTabBarScroller;

  constructor() { }

  ngAfterViewInit() {
    this.tabBarScroller = new MDCTabBarScroller(this.nav.nativeElement);
  }
}

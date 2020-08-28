import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MDCTabBarScroller } from '@material/tabs';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  public appRoutes = routes;
  private tabBarScroller?: MDCTabBarScroller;

  ngAfterViewInit(): void {
    // this.tabBarScroller = new MDCTabBarScroller(this.nav.nativeElement);
  }
}

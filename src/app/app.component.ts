import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appRoutes = routes;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-b',
  templateUrl: './c-b.component.html',
  styleUrls: ['./c-b.component.css'],
})
export class CBComponent {
  @Input() code = '';
}

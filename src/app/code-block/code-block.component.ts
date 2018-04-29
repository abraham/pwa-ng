import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent {

  @Input() command = '';
  @Input() lang = 'js';
  @Input() code = '';

  constructor() { }

  get language(): string {
    return `language-${this.lang}`;
  }
}

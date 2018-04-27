import 'code-prettify/loader/prettify';

import { Component, Input, OnInit } from '@angular/core';

declare global {
  const PR: {
    prettyPrint: () => {};
  };
}

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent implements OnInit {

  @Input() command = '';
  @Input() lang: string;

  constructor() { }

  get language(): string {
    return `language-${this.lang}`;
  }

  ngOnInit() {
    PR.prettyPrint();
  }
}

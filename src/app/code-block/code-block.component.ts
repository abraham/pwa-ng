import { Component, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import clipboard from 'clipboard-polyfill';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent {

  @Input() command = '';
  @Input() lang = 'js';
  @Input() code = '';

  constructor(public snackBar: MatSnackBar) { }

  get language(): string {
    return `language-${this.lang}`;
  }

  public copy() {
    clipboard.writeText(this.command)
      .then(() => this.openSnackBar('Copied to clipboard'))
      .catch(_error => this.openSnackBar('Clipboard not supported on this browser'));
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2750,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
    });
  }
}

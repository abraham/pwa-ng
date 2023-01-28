import { Component, Input } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import * as clipboard from 'clipboard-polyfill';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent {
  @Input() command = '';
  @Input() lang = 'js';
  @Input() code = '';

  constructor(public snackBar: MatSnackBar) {}

  get language(): string {
    return `language-${this.lang}`;
  }

  public copy(): void {
    clipboard
      .writeText(this.command)
      .then(() => this.openSnackBar('Copied to clipboard'))
      .catch(() =>
        this.openSnackBar('Clipboard not supported on this browser'),
      );
  }

  private openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2750,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
    });
  }
}

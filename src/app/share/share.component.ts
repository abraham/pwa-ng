import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  public nativeShare = 'share' in navigator;
  public services = [
    {
      name: 'Twitter',
      url: () => `https://twitter.com/intent/tweet?text=${this.title.getTitle()} ${this.currentUrl}`,
    },
    {
      name: 'Facebook',
      url: () => `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`,
    }
  ];

  constructor(private snackBar: MatSnackBar, private title: Title) { }

  private get currentUrl(): string {
    return window.location.href;
  }

  public share(): void {
    navigator.share({
      text: this.title.getTitle(),
      url: this.currentUrl,
    })
    .catch(this.error);
  }

  public shareTo(url: () => string): void {
    window.open(url());
  }

  public error(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2750,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
    });
  }
}

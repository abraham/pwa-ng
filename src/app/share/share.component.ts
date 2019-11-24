import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';

declare global {
  interface Navigator {
    share: (data: { text: string, url: string }) => Promise<any>;
  }
}

@Component({
  selector: 'pwa-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  public objectKeys = Object.keys;
  public nativeShare = 'share' in navigator;
  public services = {
    google: {
      name: 'Google+',
      url: () => `https://plus.google.com/share?url=${this.currentUrl}` },
    twitter: {
      name: 'Twitter',
      url: () => `https://twitter.com/intent/tweet?text=${this.currentTitle} ${this.currentUrl}` },
    facebook: {
      name: 'Facebook',
      url: () => `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}` },
  };

  constructor(public snackBar: MatSnackBar) { }

  private get currentTitle(): string {
    return document.querySelector('title').innerText;
  }

  private get currentUrl(): string {
    return window.location.href;
  }

  public share() {
    navigator.share({
      text: this.currentTitle,
      url: this.currentUrl,
    })
    .catch(this.error);
  }

  public shareTo(service: string) {
    window.open(this.services[service].url());
  }

  public error(message: string) {
    this.snackBar.open(message, '', {
      duration: 2750,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
    });
  }
}

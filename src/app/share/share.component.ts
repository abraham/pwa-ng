import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatSnackBar } from '@angular/material';

@Component({
  selector: 'pwa-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  nativeShare = 'share' in navigator;
  services = {
    google: () => `https://plus.google.com/share?url=${this.url}`,
    twitter: () => `https://twitter.com/intent/tweet?text=${this.text + ' ' + this.url}`,
    facebook: () => `https://www.facebook.com/sharer/sharer.php?u=${this.url}`,
  };

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  private get text(): string {
    return document.querySelector('title').innerText;
  }

  private get url(): string {
    return window.location.href;
  }

  public share(event) {
    navigator.share({
      text: this.text,
      url: this.url,
    })
    .catch(this.error);
  }

  public shareTo(service: string) {
    window.open(this.services[service]());
  }

  public error(message: string) {
    this.snackBar.open(message, '', {
      duration: 2750,
      verticalPosition: 'bottom',
      horizontalPosition: 'start',
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-b',
  templateUrl: './c-b.component.html',
  styleUrls: ['./c-b.component.css']
})
export class CBComponent implements OnInit {
  @Input() code = '';

  constructor() { }

  ngOnInit() {
  }

}

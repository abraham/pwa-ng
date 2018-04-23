import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent implements OnInit {

  @Input() command = '';

  constructor() { }

  ngOnInit() {
  }

}

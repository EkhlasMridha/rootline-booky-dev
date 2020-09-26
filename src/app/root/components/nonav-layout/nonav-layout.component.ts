import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nonav-layout',
  templateUrl: './nonav-layout.component.html',
  styleUrls: ['./nonav-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NonavLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

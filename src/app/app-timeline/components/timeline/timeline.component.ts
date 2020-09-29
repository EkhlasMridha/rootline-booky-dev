import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { TimelineModel } from 'src/app/app-calender/models/timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
}

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { TimelineModel } from '../models/timeline.model';

@Directive({
  selector: '[appTimeline]',
})
export class TimelineDirective {
  @Input() timeline: TimelineModel;
  @Input() document: Document;
  constructor(private elm: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.updateTimeline();
    console.log(this.timeline);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  updateTimeline() {
    // if (this.end && this.start) {
    //   console.log(this.end);
    //   console.log(this.start);
    //   let dom = this.elm.nativeElement;
    //   this.renderer.setStyle(dom, 'left', this.start + 'px');
    //   this.renderer.setStyle(dom, 'width', this.end + 'px');
    //   console.log(this.elm.nativeElement);
    // }
  }

  @HostListener('window:resize', ['event$'])
  onResize(event) {
    this.updateTimeline();
  }
}

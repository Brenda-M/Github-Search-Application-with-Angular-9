import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouserEnter(){
    this.highlight('teal');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);

  }
  
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
  
}

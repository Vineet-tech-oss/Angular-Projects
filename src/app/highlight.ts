import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = '#f1f3f4';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    if (color) {
      this.el.nativeElement.style.transform = 'scale(1.02)';
      this.el.nativeElement.style.transition = 'all 0.3s ease';
    } else {
      this.el.nativeElement.style.transform = 'scale(1)';
    }
  }
}

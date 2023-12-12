import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLAnchorElement>) {}

  ngAfterViewInit(): void {
    const email = this.elementRef.nativeElement.innerHTML;
    this.elementRef.nativeElement.href = `mailto:${email}`;
  }
}

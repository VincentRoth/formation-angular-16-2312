import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements OnChanges {
  @Input({ alias: 'appMailTo' }) email: string;

  constructor(private elementRef: ElementRef<HTMLAnchorElement>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['email'].currentValue) {
      this.elementRef.nativeElement.href = `mailto:${this.email}`;
    }
  }
}

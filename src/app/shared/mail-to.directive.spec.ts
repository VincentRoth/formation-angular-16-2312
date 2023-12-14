import { ElementRef } from '@angular/core';
import { MailToDirective } from './mail-to.directive';

describe('MailToDirective', () => {
  it('should create an instance', () => {
    const directive = new MailToDirective(
      new ElementRef(document.createElement('a'))
    );
    expect(directive).toBeTruthy();
  });
});

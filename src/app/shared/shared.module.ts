import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';

@NgModule({
  declarations: [MailToDirective],
  imports: [CommonModule],
  exports: [MailToDirective],
})
export class SharedModule {}

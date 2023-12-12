import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailToDirective } from './mail-to.directive';
import { FormatPhonePipe } from './format-phone.pipe';

@NgModule({
  declarations: [MailToDirective, FormatPhonePipe],
  imports: [CommonModule],
  exports: [MailToDirective, FormatPhonePipe],
  providers: [FormatPhonePipe],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalDetailsComponent } from './animal/animal-details/animal-details.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { FormatPhonePipe } from './shared/format-phone.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalDetailsComponent,
    AnimalListComponent,
  ],
  providers: [FormatPhonePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

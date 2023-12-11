import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnimalModule, StandaloneComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

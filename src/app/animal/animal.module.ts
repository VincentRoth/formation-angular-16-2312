import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  declarations: [AnimalDetailsComponent],
  imports: [CommonModule],
  exports: [AnimalDetailsComponent],
})
export class AnimalModule {}

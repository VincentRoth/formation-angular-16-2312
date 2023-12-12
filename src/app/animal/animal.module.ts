import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalDetailsComponent, AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}

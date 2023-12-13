import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRoutingModule } from './animal-routing.module';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalItemComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule],
  exports: [],
})
export class AnimalModule {}

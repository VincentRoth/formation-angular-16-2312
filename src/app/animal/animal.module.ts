import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalComponent } from './animal.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [],
})
export class AnimalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetListComponent } from './vet-list/vet-list.component';

@NgModule({
  declarations: [VetComponent, VetDetailsComponent, VetListComponent],
  imports: [CommonModule, VetRoutingModule],
})
export class VetModule {}

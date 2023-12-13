import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetComponent } from './vet.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetFormComponent } from './vet-form/vet-form.component';

const routes: Routes = [
  {
    path: '',
    component: VetComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: 'form', component: VetFormComponent },
      { path: 'form/:id', component: VetFormComponent },
      { path: ':id', component: VetDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}

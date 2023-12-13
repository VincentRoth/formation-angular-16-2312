import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalComponent } from './animal.component';
import { hasRightGuard } from '../shared/auth/has-right.guard';
import { Right } from '../shared/auth/right';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent,
    canActivate: [hasRightGuard],
    data: { right: Right.ANIMAL_GET },
    children: [
      { path: '', component: AnimalListComponent },
      { path: ':id', component: AnimalDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}

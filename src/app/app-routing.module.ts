import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hasRightGuard } from './shared/auth/has-right.guard';
import { Right } from './shared/auth/right';

const routes: Routes = [
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  {
    path: 'vets',
    canActivate: [hasRightGuard],
    data: { right: Right.VET_GET },
    loadChildren: () => import('./vet/vet.module').then((mod) => mod.VetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

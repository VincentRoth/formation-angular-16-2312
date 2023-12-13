import { Injectable } from '@angular/core';
import { Right } from './right';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private rights = [Right.ANIMAL_GET, Right.VET_GET];

  hasRight(right: Right): boolean {
    return this.rights.includes(right);
  }
}

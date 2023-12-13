import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Veterinarian } from './veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VeterinarianService extends AbstractCrudService<Veterinarian> {
  constructor() {
    super('/api/veterinarians');
  }
}

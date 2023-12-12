import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      name: 'Mon animal du service',
      species: 'cat',
    };
  }

  getAll(): Animal[] {
    return [
      {
        id: 1,
        name: 'Mon animal 1',
        species: 'cat',
      },
      {
        id: 2,
        name: 'Mon animal 2',
        species: 'cat',
      },
    ];
  }
}

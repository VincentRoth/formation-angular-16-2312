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
      email: 'test@google.com',
      phoneNumber: '06.12.34.56.78',
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

import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`/api/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/animals/${id}`);
  }
}

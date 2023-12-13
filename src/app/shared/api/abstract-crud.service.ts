import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractCrudService<T extends { id?: number }> {
  protected httpClient: HttpClient;

  constructor(protected endpoint: string) {
    this.httpClient = inject(HttpClient);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.endpoint}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.endpoint);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${id}`);
  }
}

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

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(this.endpoint, data);
  }

  update(data: T): Observable<T> {
    return this.httpClient.put<T>(`${this.endpoint}/${data.id}`, data);
  }

  save(data: T): Observable<T> {
    return data.id ? this.update(data) : this.create(data);
  }
}

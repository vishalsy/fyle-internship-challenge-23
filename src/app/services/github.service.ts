// src/app/services/github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getRepositories(username: string, page: number = 1, perPage: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}/repos`, {
      params: { page: page.toString(), per_page: perPage.toString() }
    }).pipe(
      map(response => response)
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface GitHubRepo {
  name: string;
  html_url: string;
  updated_at: string;
  description: string;
  homepage: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/repos/gittjar';

  constructor(private http: HttpClient) { }

  getRepository(repoName: string): Observable<GitHubRepo> {
    return this.http.get<GitHubRepo>(`${this.apiUrl}/${repoName}`).pipe(
      catchError(error => {
        console.error(`Error fetching ${repoName}:`, error);
        return of(null as any);
      })
    );
  }

  getMultipleRepositories(repoNames: string[]): Observable<GitHubRepo[]> {
    const requests = repoNames.map(name => this.getRepository(name));
    return forkJoin(requests);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
}

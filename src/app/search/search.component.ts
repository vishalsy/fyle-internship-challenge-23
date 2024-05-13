// src/app/search/search.component.ts
import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';
  repositories: any[] = [];
  error: string = '';

  constructor(private githubService: GithubService) { }

  onSearch(): void {
    this.githubService.getRepositories(this.username).subscribe({
      next: (repos) => this.repositories = repos,
      error: (err) => this.error = 'User not found',
      complete: () => console.log('Fetch completed')
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubRepositories } from './model';

@Injectable()
export class SearchRepositoriesProxyService {


    constructor(private httpClient: HttpClient) { }


    fetchRepositories(query: string): Observable<GitHubRepositories> {
        const params = { q: query };
        return this.httpClient.get<GitHubRepositories>('https://api.github.com/search/repositories?', { params });
    }

}

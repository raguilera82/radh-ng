import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { GitHubRepositories } from './model';
import { SearchRepositoriesProxyService } from './search-repositories.proxy.service';

@Component({
    selector: 'search-repositories',
    templateUrl: './search-repositories.component.html'
})
export class SearchRepositoriesComponent implements OnInit {

    queries$ = new Subject<string>();
    searchResult$: Observable<GitHubRepositories>;

    constructor(private service: SearchRepositoriesProxyService) {}

    ngOnInit() {
        this.searchResult$ = this.queries$.pipe(
            map((query: string) => query ? query.trim() : ''),
            filter(Boolean),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((query: string) => this.service.fetchRepositories(query))
        );
    }

    onTextChange(query: string) {
        this.queries$.next(query);
    }

}

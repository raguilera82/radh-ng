import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { User, UserCard, UserExtra } from './model';

@Injectable()
export class CodeExampleService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserCard[]> {
    return this.httpClient.get<User[]>('/assets/data/users-data.json')
      .pipe(
        mergeMap((users: User[]) => {
          if (users.length > 0) {
            return forkJoin(
              users.map((userGitlab: User) => {
                return this.httpClient.get(`/assets/data/user-${userGitlab.username}.json`)
                  .pipe(
                    map((userExtraGitlab: UserExtra) => {
                      const userCard: UserCard = {
                        login: userExtraGitlab.login,
                        name: userExtraGitlab.name,
                        site_admin: userExtraGitlab.site_admin,
                        avatar_url: userExtraGitlab.avatar_url
                      };
                      return userCard;
                    })
                  );
              })
            );
          } else {
            return of([]);
          }
        })
      );
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserCard } from './model';

@Injectable({
  providedIn: 'root'
})
export class CodeExampleServiceFake {

  constructor() { }

  getUsers(): Observable<UserCard[]> {
    return of(USERS_CARD);
  }

}

const USERS_CARD: UserCard[] = [
  {
    login: 'roland',
    name: 'Roland Mai',
    site_admin: false,
    avatar_url: 'https://avatars2.githubusercontent.com/u/28?v=4'
  },
  {
    login: 'raguilera82',
    name: 'Rubén Aguilera Díaz-Heredero',
    site_admin: false,
    avatar_url: 'https://avatars1.githubusercontent.com/u/818068?v=4'
  },
  {
    login: 'jmsanchez',
    name: 'Jose Manuel Sánchez Suárez',
    site_admin: false,
    avatar_url: 'https://avatars2.githubusercontent.com/u/739604?v=4'
  }];

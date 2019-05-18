import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
    selector: 'app-user-example',
    template: `
    <h1>User Card Example</h1>
    <radh-layout-center>
    <h2>Search GitHub User</h2>
    <radh-github-search-user (userSearched)="onUserSearched($event)"></radh-github-search-user>
    <radh-user [user]="userInfo" (selected)="onSelected($event)"></radh-user>
    </radh-layout-center>
    <radh-toast></radh-toast>
    `,
    styles: [
        `
        :host {
            --radh-button-background-color: green;
        }
        `
    ]
})

export class UserExampleComponent implements OnInit {

    userInfo: string;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.userInfo = JSON.stringify(DEFAULT_USER);
    }

    onSelected(ev) {
        const radhToast = this.elementRef.nativeElement.querySelector('radh-toast');
        radhToast.launchToast(ev.detail.login);
    }

    onUserSearched(ev) {
        console.log('search');
        const radhUser = this.elementRef.nativeElement.querySelector('radh-user');
        radhUser.user = JSON.stringify(ev.detail);
    }
}

const DEFAULT_USER = {
    'login': 'raguilera82',
    'id': 818068,
    'node_id': 'MDQ6VXNlcjgxODA2OA==',
    'avatar_url': 'https://avatars1.githubusercontent.com/u/818068?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/raguilera82',
    'html_url': 'https://github.com/raguilera82',
    'followers_url': 'https://api.github.com/users/raguilera82/followers',
    'following_url': 'https://api.github.com/users/raguilera82/following{/other_user}',
    'gists_url': 'https://api.github.com/users/raguilera82/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/raguilera82/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/raguilera82/subscriptions',
    'organizations_url': 'https://api.github.com/users/raguilera82/orgs',
    'repos_url': 'https://api.github.com/users/raguilera82/repos',
    'events_url': 'https://api.github.com/users/raguilera82/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/raguilera82/received_events',
    'type': 'User',
    'site_admin': false,
    'name': 'Rubén Aguilera Díaz-Heredero',
    'company': 'Autentia',
    'blog': 'http://www.adictosaltrabajo.com',
    'location': 'San Fernando de Henares',
    'email': null,
    'hireable': null,
    'bio': null,
    'public_repos': 40,
    'public_gists': 3,
    'followers': 48,
    'following': 0,
    'created_at': '2011-05-30T06:27:46Z',
    'updated_at': '2018-11-10T22:10:39Z'
};

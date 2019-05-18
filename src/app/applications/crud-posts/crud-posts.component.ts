import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from './post';
import { PostsStoreService } from './posts-store.service';

@Component({
    selector: 'app-crud-posts',
    template: `
            <h1>Selected Post</h1>
            <form [formGroup]="formPost">
                <input type="hidden" formControlName="postId">
                <label>Heading:</label>
                <input type="text" formControlName="heading">
                <label>Content:</label>
                <input type="text" formControlName="content">
                <button *ngIf="action === ''"(click)="onCreate()" [disabled]="!formPost.valid">Create</button>
                <button *ngIf="action === 'update'" (click)="onUpdate()" [disabled]="!formPost.valid">Update</button>
                <button *ngIf="action !== ''" (click)="onCancel()">Cancel</button>
            </form>

        <div *ngIf="posts$">
        <h1>Posts</h1>
            <div *ngFor="let post of (posts$ | async)">
                <p>{{post.heading}}</p>
                <button (click)="onDelete(post)">Delete</button>
                <button (click)="onSelect(post)">Selec</button>
            </div>
        </div>
    `
})
export class CrudPostsComponent implements OnInit {

    posts$: Observable<Post[]>;

    formPost: FormGroup;

    action = '';

    constructor(
        private store: PostsStoreService
    ) {}

    ngOnInit() {
        this.store.init();
        this.posts$ = this.store.get$();

        this.formPost = new FormGroup({
            postId: new FormControl(['']),
            heading: new FormControl('', [Validators.required]),
            content: new FormControl([''])
        });
    }

    onDelete(post: Post) {
        this.store.delete$(post.postId);
    }

    onCreate() {
        const heading = this.formPost.get('heading').value;
        const content = this.formPost.get('content').value;
        const post: Post = {
            heading: heading,
            content: content
        };
        this.store.create$(post);
    }

    onSelect(post: Post) {
        this.formPost.get('postId').setValue(post.postId);
        this.formPost.get('heading').setValue(post.heading);
        this.formPost.get('content').setValue(post.content);
        this.action = 'update';
    }

    onUpdate() {
        const postId = this.formPost.get('postId').value;
        const heading = this.formPost.get('heading').value;
        const content = this.formPost.get('content').value;
        const post = {
            postId, heading, content
        };
        this.store.update$(postId, post);
    }

    onCancel() {
        this.formPost.get('heading').setValue('');
        this.formPost.get('content').setValue('');
        this.action = '';
    }
}

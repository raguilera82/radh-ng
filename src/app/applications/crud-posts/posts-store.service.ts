import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from './post';
import { PostsService } from './posts.service';
import { Store } from './store';

@Injectable({providedIn: 'root'})
export class PostsStoreService extends Store<Post[]> {

    constructor(private service: PostsService) {
        super();
    }

    init(): void {
        if (this.get()) {return; }

        this.service.getPosts().pipe(
            tap(this.store)
        ).toPromise();
    }

    create$(post: Post): Promise<Post> {
        return this.service.createPost(post).pipe(
            tap(postResult => {
                this.store([postResult, ...this.get()]);
            })
        ).toPromise();
    }

    update$(postId: number, post: Post): Promise<Post> {
        return this.service.updatePost(postId, post).pipe(
            tap(() => {
                const posts = this.get();
                const p = Object.assign({}, post);
                const index = this.searchIndex(posts, postId);
                const newPosts = [...posts.slice(0, index), p, ...posts.slice(index + 1)];
                this.store(newPosts);
            })
        ).toPromise();
    }

    delete$(postId: number): Promise<Post> {
        return this.service.deletePost(postId).pipe(
            tap(() => {
                const posts = this.get();
                const newPosts = posts.filter(post => post.postId !== postId);
                this.store(newPosts);
            })
        ).toPromise();
    }

    private searchIndex(posts: Post[], postId: number): number {
        return posts.findIndex(item => item.postId === postId);
    }

}

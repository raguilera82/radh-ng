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
                posts[this.searchIndex(posts, postId)] = post;
                this.store(posts);
            })
        ).toPromise();
    }

    delete$(postId: number): Promise<Post> {
        return this.service.deletePost(postId).pipe(
            tap(() => {
                const posts = this.get();
                posts.splice(this.searchIndex(posts, postId), 1);
                this.store(posts);
            })
        ).toPromise();
    }

    private searchIndex(posts: Post[], postId: number): number {
        return posts.findIndex(item => item.postId === postId);
    }

}

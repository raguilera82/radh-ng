import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PostDTO } from './post.dto';


@Injectable({
    providedIn: 'root'
})
export class PostProxyService {

    private url: string;

    constructor(private httpClient: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }

    getAll$(): Observable<PostDTO[]> {
        return this.httpClient.get<PostDTO[]>(this.url);
    }

    get$(postId: number): Observable<PostDTO> {
        return this.httpClient.get<PostDTO>(`${this.url}/${postId}`);
    }

    post$(post: PostDTO): Observable<PostDTO> {
        return this.httpClient.post<PostDTO>(this.url, { post });
    }

    patch$(postId: number, post: PostDTO): Observable<PostDTO> {
        return this.httpClient.patch<PostDTO>(`${this.url}/${postId}`, { post });
    }

    delete$(postId: number): Observable<PostDTO> {
        return this.httpClient.delete<PostDTO>(`${this.url}/${postId}`);
    }

}

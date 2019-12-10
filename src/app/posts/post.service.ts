import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from './post';

const DEVALL_API = 'https://api.devall.com.br/devall-api/api/v1';

@Injectable({
    providedIn: 'root'
})
export class PostService{
    constructor(private http: HttpClient){
        
    }

    posts(){
        return this.http.get<Post[]>(DEVALL_API + '/post');
    }
}    
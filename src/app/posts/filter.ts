import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post';

@Pipe({
    name: 'filter'
})
export class Filter implements PipeTransform{
    
    transform(posts: Post[], value:string) {
        value = value.trim().toLowerCase();
        if(value){
            return posts.filter(posts => posts.titulo.toLowerCase().includes(value));
        }else{
            return posts;
        }
    }

}
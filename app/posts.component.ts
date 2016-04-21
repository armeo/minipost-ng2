import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService]
})
export class PostsComponent implements OnInit {
    posts: any[];
    isLoading = true;
    
    constructor(private _service: PostService){
        
    }
    
    ngOnInit(){
        this._service.getPosts().subscribe(
            posts => this.posts = posts,
            null,
            () => { this.isLoading = false; }
        );
    }
    
}
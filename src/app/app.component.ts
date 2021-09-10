import { Component } from '@angular/core';
import {PostsService} from "./state/posts.service";
import {PostsQuery} from "./state/posts.query";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akitaclass';

  posts$ = this.postsQuery.selectAll();

  constructor(private postsQuery: PostsQuery, private postsService: PostsService) {
    this.postsService.get().subscribe();
  }
}

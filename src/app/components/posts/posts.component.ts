import {Component, Input, OnChanges, OnInit} from '@angular/core';

import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {

  @Input()
  idPost: number;
  posts: IPost[] = [];
  postsId: IPost [] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  ngOnChanges(): void {
    this.postService.getPostsByUserId(this.idPost).subscribe(value => this.posts = value);
  }

}

import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  post: Post;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.post = value['data']);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService, UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm: FormGroup;
  users: IUser[];
  userDetail: IUser;
  posts: IPost[];
  postDetail: IPost;

  @Input()
  postId: number;

  constructor(private userService: UserService, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userId: new FormControl(1),
      postId: new FormControl(1)
    });

    this.userService.getUsers().subscribe(value => this.users = value);

    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  routeTo(): void {
    const id = this.myForm.controls['userId'].value;
    const idPost = this.myForm.controls['postId'].value;

    this.userDetail = this.users[id - 1];
    this.postDetail = this.posts[idPost - 1];

    this.router.navigate([`details`], {state: {user: this.userDetail, post: this.postDetail}});
  }
}

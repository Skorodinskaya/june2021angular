import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  myForm: FormGroup;
  users: IUser[];
  userDetail: IUser;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userId: new FormControl(1)
    });

    this.userService.getUsers().subscribe(value => this.users = value);
  }

  showDetails() {
    const id = this.myForm.controls['userId'].value;
    this.userDetail = this.users[id - 1];
  }

  routeTo(): void {
    // this.router.navigate(['/userDetails']);
    this.router.navigate(['/:id'], {state: this.userDetail})

  }
}

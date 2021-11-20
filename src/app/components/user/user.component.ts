import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: IUser;

  @Output()
  username = new EventEmitter <string>();

  lift() {
    this.username.emit(this.user.username);
  }
}

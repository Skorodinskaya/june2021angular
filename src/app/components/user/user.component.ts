import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HideButtonService} from "../../services/hide-button.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: IUser;
  currentButton: number;

  // @Output()
  // username = new EventEmitter <string>();
  //
  // lift() {
  //   this.username.emit(this.user.username);
  // }

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private hideButtonService:HideButtonService) {
  }

  navTo(){
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute} )
  }

  showButton() {
    this.hideButtonService.getButton().subscribe(value => this.currentButton = value);
    this.hideButtonService.setButton(this.user.id)
  }
}

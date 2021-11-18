import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user: {
    username: 'Max',
    password: '4444',
  };
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.user)
  }
}

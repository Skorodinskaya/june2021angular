import {Component, Input, OnInit} from '@angular/core';
import {FormsComponent} from "../forms/forms.component";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  detail: FormsComponent;

  constructor() { }

  ngOnInit(): void {
  }

}

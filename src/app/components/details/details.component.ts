import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  state: any;
  // @Input()
  // detail: FormsComponent;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {

    this.activatedRouter.params.subscribe(() => {
      this.state = this.router.getCurrentNavigation()?.extras.state;
      console.log(this.router.getCurrentNavigation()?.extras.state)
    });
  }
}

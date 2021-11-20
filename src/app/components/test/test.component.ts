import {Component, OnInit} from '@angular/core';
import {IncrementPipe} from "../../pipes";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user = {name: 'Max', age: 17};
  name = 'kokos';
  birthday = new Date(1952, 5, 24, 21, 11, 23);
  now = new Date();
  array = [1, 2, 3, 4, 5];
  array2: number[];

  constructor(private incrementPipe:IncrementPipe) {
  }

  ngOnInit(): void {
    this.array2 = this.incrementPipe.transform(this.array, 10)
  }

}

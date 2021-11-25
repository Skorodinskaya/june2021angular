import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HideButtonService {

  private button = new BehaviorSubject<number>(0);

  constructor() { }

  getButton(): BehaviorSubject<number>{
    return this.button
  };
  setButton(value: number):void{
    this.button.next(value)
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from "../interfaces";

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: IUser, ...args: any[]): string {
    return (`${value.id}) ${value.name} - ${value.email}`)
  }

}

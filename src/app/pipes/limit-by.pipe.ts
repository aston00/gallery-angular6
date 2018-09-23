import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitBy'
})
export class LimitByPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    if(!value){
      return;
    }
    console.log(value);
    let result =  value.slice(0, 3);
    console.log(result);
    return result;
  }

}

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, length:number) {
    if(value.length > 0){
      return value.slice(0, length) + ' ...'
    }
    return value;
  }
}

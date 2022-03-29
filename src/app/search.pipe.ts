import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTearm:string):any {
    if(value){
      return value.filter(function (search: {tearm:string}){
        return (search.tearm.toLocaleLowerCase().indexOf(searchTearm.toLocaleLowerCase()) >-1
        );
      }
      );}
    
  }

}
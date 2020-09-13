import { Pipe, PipeTransform } from '@angular/core';
import { searchall } from './shared/searchAll';

@Pipe({
  name: 'tablesort'
})
export class TablesortPipe implements PipeTransform {

  transform(value: searchall[],columnName:string,order:string): searchall[] {
    console.log(value + columnName + order);
    if(columnName===undefined || order===undefined)
    {
    return value;
    }
    else{
    return  [...value].sort((a,b)=>{
      let value =undefined;
      if(order==='asc'){
         value = a[columnName]>b[columnName];
      }else if (order ==='desc')
      {
        value = a[columnName]<b[columnName];
      }
      if(value===undefined){
        return 0;
      }
      else if(value==true)
        {
          return 1;
        }
        else{
          return -1
        }
      
      })
    }
  }

}

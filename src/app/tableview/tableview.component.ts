import { Component, OnInit, Input } from '@angular/core';
import { searchall } from '../shared/searchAll';
import { SortEvent } from '../tablecol.directive';
const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})

export class TableviewComponent implements OnInit {

  constructor() { 
    console.log('const')
  }
  @Input ('tableviewdata') tableviewdata:searchall[];
  public asc:boolean=false;
  public desc:boolean=false;
  public tableviewdatacopy:searchall[];
  public test:boolean=true;
  ngOnInit(): void {
    console.log(this.tableviewdata);
   
  }

  ngOnChanges(){
    console.log('changed');
  //  debugger;
  this.tableviewdatacopy=Object.assign([],this.tableviewdata);
   // this.tableviewdatacopy=this.tableviewdata;
  }
 
  onSort(event:SortEvent)
  {
    console.log('in class')
    
    if(this.asc===false && this.desc===false)
    {
      this.asc=true;
    }
    else if (this.desc===false && this.asc===true)
    {
      this.asc=false;
      this.desc=true;
    }
    else if (this.desc===true){
      this.desc=false;
    }
    if(this.asc===true || this.desc===true)
    {
    this.tableviewdata.sort((a:searchall,b:searchall)=>{
      let z =0;
      let  bi =true;
      if(this.asc===true)
      {
        bi = a[event.columnName] > b[event.columnName];
      }
      else if (this.desc==true){
        bi = a[event.columnName] < b[event.columnName];
      }
     
    if(bi)
    {
      z=1;
    }
    else{
      z=-1;
    }
    //console.log(this.tableviewdata);
      return z;
    });
  }
  else{
    this.tableviewdata=this.tableviewdatacopy;
  }

  }

}

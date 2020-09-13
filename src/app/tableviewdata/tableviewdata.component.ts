import { Component, OnInit, Input } from '@angular/core';
import { searchall } from '../shared/searchall';


@Component({
  selector: 'app-tableviewdata',
  templateUrl: './tableviewdata.component.html',
  styleUrls: ['./tableviewdata.component.css']
})
export class TableviewdataComponent implements OnInit {

  @Input () tableviewdata:searchall[];
  public asc:boolean=false;
  public desc:boolean=false;
  public order:string;
  public colName:string;
  public tableviewdata2:searchall[];
  public tasc:boolean=false;
  public tdesc:boolean=false;
  public yasc:boolean=false;
  public ydesc:boolean=false;
  public upclassname:string="fa fa-arrow-up";
  constructor() { 
    console.log('in tbviewdata')
    console.log(this.tableviewdata);
  }
  ngOnChanges(){
  
  }

  headerclick(event){
  //  console.log(event);
  console.log(event.target.classList);
  let ParentElement = event.target.parentElement;
  //console.log(ParentElement.children);
  for(let j=0;j<ParentElement.children.length;j++)
  {
    if(ParentElement.children[j].innerHTML!==event.target.innerHTML)
    {
      ParentElement.children[j].classList.remove("fa");
    }else{
      event.target.classList.add('fa');
    }
  } 
    console.log(event.target.innerHTML);
    this.colName=event.target.innerHTML;
    if(this.colName=='Title')
    {
    if(this.order==='' || this.order===undefined)
    {
      this.order='asc';
      this.tasc=true;
    }
    else if(this.order==='asc')
    {
      this.order='desc';
      this.tasc=false;
      this.tdesc=true;
    }
    else if(this.order==='desc')
    {
      this.order='';
      this.tasc=false;
      this.tdesc=false;
    }
  }
  else if (this.colName==='Year'){
  if(this.order==='' || this.order===undefined)
  {
    this.order='asc';
    this.yasc=true;
  }
  else if(this.order==='asc')
  {
    this.order='desc';
    

    this.yasc=false;
    this.ydesc=true;
  }
  else if(this.order==='desc')
  {
    this.order='';
    this.yasc=false;
    this.ydesc=false;
  }
}
  }
  ngOnInit(): void {
    console.log(this.tableviewdata);
  }

  trackItem (index, item) {
    return this.tableviewdata2 ? this.tableviewdata2 : undefined;
  }
}

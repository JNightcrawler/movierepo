import { Directive, Input, Output, EventEmitter } from '@angular/core';


export interface SortEvent {
  columnName:string;
  direction:string;
}
@Directive({
  selector: '[appTablecol]',
  host: {
    '(click)': 'dirsort()'
  }
})
export class TablecolDirective {

  @Input() sortcolumn:string='';
  @Output() sort = new EventEmitter<SortEvent>();
  constructor() { }

  dirsort()
  {
    console.log('inside directive sort' + this.sortcolumn);
    this.sort.emit({columnName:this.sortcolumn,direction:'asc'});
  }

}

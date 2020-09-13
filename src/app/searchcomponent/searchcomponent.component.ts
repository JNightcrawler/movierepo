import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { searchall } from '../shared/searchAll';

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrls: ['./searchcomponent.component.css']
})
export class SearchcomponentComponent implements OnInit {

  constructor(private service:MovieService) { }
  public searchterm:string='';
  public result:searchall[];
  ngOnInit(): void {
  }

   search():void{
    this.service.getmoviedetail(this.searchterm).subscribe(data =>
      {

      console.log(data);
      this.result =  data.Search;
    })
  }

}

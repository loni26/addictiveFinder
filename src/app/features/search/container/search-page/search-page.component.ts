import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent  {
  searchInput: string;

  constructor(private _router: Router) { }
  
  async search(){
    
    const data = this._router.navigate([`../tabs/list/${this.searchInput}`]);
    console.log('=>', data);
    
    this.searchInput ='';
  }

}

import { AddictivesService } from './../../../../services/addictives/addictives.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  additives$: Observable<any>;
  max: number = 10;

  constructor(private _api: AddictivesService) { }

  ngOnInit(): void {
    this._api.load();
    this.additives$ = this._api.data$;
  }

  loadMore(){
    this.max = this.max + 10;
  }

}

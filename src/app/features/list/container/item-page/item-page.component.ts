import { WikiService } from './../../../../services/wiki/wiki.service';
import { AddictivesService } from './../../../../services/addictives/addictives.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent  {
  item: any;
  details: any = null;

  constructor(
    private _api: AddictivesService,
    private _wiki: WikiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  async ionViewWillEnter(){
    const {id = null } = this._route.snapshot.params;
    if(!id) return;

    const item = await this._api.getItemById(id);
    if(!item) return this._router.navigate(['../tabs/search']);
    this.item = item;

    this.details = await this._wiki.getByAddictive(id)
  }





}

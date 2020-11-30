import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './container/search-page/search-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class SearchModule { }

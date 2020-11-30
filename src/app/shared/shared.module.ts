import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipe } from './pipe/color/color.pipe';
import { LevelPipe } from './pipe/level/level.pipe';



@NgModule({
  declarations: [
    ColorPipe, LevelPipe
  ],

  exports: [
    ColorPipe,
    LevelPipe,
    CommonModule,
    IonicModule
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }

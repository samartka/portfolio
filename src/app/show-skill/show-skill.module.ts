import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillitemComponent } from './skillitem/skillitem.component';
import { SkilllistComponent } from './skilllist/skilllist.component';



@NgModule({
  declarations: [SkillitemComponent, SkilllistComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SkillitemComponent,SkilllistComponent
  ]
})
export class ShowSkillModule { }

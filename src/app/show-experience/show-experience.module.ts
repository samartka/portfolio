import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolistComponent } from './portfolist/portfolist.component';
import { PortfoitemComponent } from './portfoitem/portfoitem.component';



@NgModule({
  declarations: [PortfolistComponent, PortfoitemComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PortfoitemComponent,PortfolistComponent
  ]
})
export class ShowExperienceModule { }

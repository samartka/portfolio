import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkilllistComponent } from "./show-skill/skilllist/skilllist.component";
import { PortfolistComponent } from "./show-experience/portfolist/portfolist.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    {
    path: 'home',
    component: HomeComponent
    },
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: 'skill',
    component: SkilllistComponent
    },
    {
    path: 'portfolio',
    component: PortfolistComponent
    },
    {
      path: 'contact',
      component: ContactComponent
      },
    {
    path: '**',
    component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

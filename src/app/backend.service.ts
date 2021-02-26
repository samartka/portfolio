import { Injectable } from '@angular/core';
import { Skill } from "./skill";
import { Portfo } from "./portfo";


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor() { }

  getSkills(): Skill[]{
    return [
      {name:"VB.Net",desc:"Desktop and mobile applicaton development",proficiency:"Good"},
      {name:"Python",desc:"Desktop application development",proficiency:"Moderate"},
      {name:"PHP",desc:"Web application development",proficiency:"Moderate"},
      {name:"Basic4Android",desc:"Mobile applicaton development",proficiency:"Moderate"},
      {name:"SQL server",desc:"Database management",proficiency:"Good"},
      {name:"MySQL",desc:"Database management",proficiency:"Good"},
      {name:"GIS",desc:"Geographic information system",proficiency:"Good"},
      {name:"Power BI",desc:"Data visualization program",proficiency:"Good"},
      {name:"Tableau",desc:"Data visualization program",proficiency:"Moderate"},
      {name:"Power Query",desc:"Data management program",proficiency:"Good"},
      {name:"R programming",desc:"Data management program",proficiency:"Moderate"},
    ]
  }

  getPortfolios():Portfo[]{
    return[
      {where:"Khonkaen university",year_from:1995,year_to:1999,detail:["Bachelor of Engineering (Civil engineer)"],pos:"student",type:"study"},
      {where:"US Embassy",year_from:2003,year_to:2050,pos:"System Analyst",detail:["Desktop and mobile application development","Data management", "Spatial data analysis","Trainer"],type:"work"},
      {where:"GIS Data Co.,Ltd.",year_from:2001,year_to:2003,pos:"Senior QC officer",detail:["Supervise Orthophoto units","Develop desktop application","Triangulation result analysis"],type:"work"},
      {where:"SystemSoft Co.,Ltd.",year_from:2000,year_to:2001,pos:"Senior software tester",detail:["Software testing","Database management"],type:"work"},
      {where:"Royal irrigation dapartment",year_from:1999,year_to:2000,pos:"Civil engineer",detail:["Structural design","Irrigation data analysis"],type:"work"}


    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../backend.service";
import { Skill } from "../../skill";

@Component({
  selector: 'app-skilllist',
  templateUrl: './skilllist.component.html',
  styleUrls: ['./skilllist.component.css']
})
export class SkilllistComponent implements OnInit {
  
  skills:Skill[];

  constructor(private backendService: BackendService) { 

  }

  ngOnInit(): void {
    this.skills =this.backendService.getSkills();
  }


}

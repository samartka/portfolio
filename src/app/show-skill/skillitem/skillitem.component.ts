import { Component, OnInit,Input } from '@angular/core';
// import { BackendService } from "../../backend.service";
import { Skill } from "../../skill";

@Component({
  selector: 'app-skillitem',
  templateUrl: './skillitem.component.html',
  styleUrls: ['./skillitem.component.css']
})
export class SkillitemComponent implements OnInit {
  @Input()   skill:Skill;

  constructor() { 
  }

  ngOnInit(): void {

  }

}

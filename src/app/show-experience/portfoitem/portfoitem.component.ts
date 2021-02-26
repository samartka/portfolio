import { Component, OnInit,Input } from '@angular/core';
import { Portfo } from "../../portfo";



@Component({
  selector: 'app-portfoitem',
  templateUrl: './portfoitem.component.html',
  styleUrls: ['./portfoitem.component.css']
})
export class PortfoitemComponent implements OnInit {
  @Input() portfo:Portfo;
  constructor() { }

  ngOnInit(): void {
  }

}

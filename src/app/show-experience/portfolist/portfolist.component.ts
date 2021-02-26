import { Component, OnInit,Output } from '@angular/core';
import { BackendService } from "../../backend.service";
import { Portfo } from "../../portfo";

@Component({
  selector: 'app-portfolist',
  templateUrl: './portfolist.component.html',
  styleUrls: ['./portfolist.component.css']
})
export class PortfolistComponent implements OnInit {
  portfos:Portfo[];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.portfos = this.backendService.getPortfolios()
  }

}

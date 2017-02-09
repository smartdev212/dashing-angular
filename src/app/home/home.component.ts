import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../shared';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  portfolios: any;
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.getPortfolios();
  }

  getPortfolios() {
    this.portfolios = this.portfolioService.all();
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  constructor() { }

  @Input ('NewConfirmed')
  NewConfirmed = 0;
  @Input ('TotalConfirmed')
  TotalConfirmed= 0;
  @Input ('NewDeaths')
  NewDeaths= 0;
  @Input ('TotalDeaths')
  TotalDeaths= 0;
  @Input ('NewRecovered')
  NewRecovered= 0;
  @Input ('TotalRecovered')
  TotalRecovered= 0;
  ngOnInit() {
  }

}

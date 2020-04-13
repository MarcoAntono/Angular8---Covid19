import { Component, OnInit } from '@angular/core';
import { SumaryCountryService } from 'src/app/services/sumary-country.service';
import { Global } from '../model/Global';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Countries } from '../model/Countries';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  _Global:Global = new Global();
  NewConfirmed = 0;
  TotalConfirmed= 0;
  NewDeaths= 0;
  TotalDeaths= 0;
  NewRecovered= 0;
  TotalRecovered= 0;

  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  }

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart'
  }

  countries: Countries[];
  constructor(private services : SumaryCountryService) { this.ngOnChart();}



  ngOnChart(){
 
    let Datatable = []
    Datatable.push(["Pais","Casos"]);
    this.services.getContryArray().subscribe(
      (resp)=>{
          this.countries =  resp;
          this.countries.forEach(element => {
            if( element.TotalConfirmed> 3000)
             Datatable.push([element.Country , element.TotalConfirmed]);
          })
      }
    );
   
    this.pieChart = {
       chartType: 'PieChart',
       dataTable: Datatable,
       options : {
         height: 500
       }
    }
  
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: Datatable,
      options : {
        height: 500
      }
   }


  }

  ngOnInit() {
    this.getCountryGlobal();
  }

   getCountryGlobal(){
   
     this.services.getCountryGlobal().subscribe(
        (resp) => {
              this._Global =  resp['Global'];
              this.NewConfirmed =   this._Global.NewConfirmed;
              this.TotalConfirmed = this._Global.TotalConfirmed;
              this.NewDeaths = this._Global.NewDeaths;
              this.TotalDeaths = this._Global.TotalDeaths;
              this.NewRecovered = this._Global.NewRecovered;
              this.TotalRecovered = this._Global.TotalRecovered;
        }
     )
     this.ngOnChart();

   }




}

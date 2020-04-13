import { Component, OnInit } from '@angular/core';
import { SumaryCountryService } from 'src/app/services/sumary-country.service';
import { Countries } from '../model/Countries';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  countris: Countries[];
  NewConfirmed = 0;
  TotalConfirmed= 0;
  NewDeaths= 0;
  TotalDeaths= 0;
  NewRecovered= 0;
  TotalRecovered= 0;
  constructor(private services: SumaryCountryService) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry() {
    this.services.getContryArray().subscribe(
      (result) => {
        this.countris = result;
      }
    );
  }

  updatePais(pais: string) {   
    console.log("pais => " + pais);
    this.countris.forEach(element => {      
      if (pais == element.Country) {      
        this.NewConfirmed = element.NewConfirmed;
        this.TotalConfirmed = element.TotalConfirmed;
        this.NewDeaths = element.NewDeaths;
        this.TotalDeaths = element.TotalDeaths;
        this.NewRecovered = element.NewRecovered;
        this.TotalRecovered = element.TotalRecovered;
      }
    });


  }

}

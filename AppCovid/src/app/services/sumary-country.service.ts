import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../componentes/model/Global';
import { Countries } from '../componentes/model/Countries';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SumaryCountryService {

  rutaApp: string = 'https://raw.githubusercontent.com/MarcoAntono/covid19api/master/JSONCovid';

  constructor(private http: HttpClient) {
    
   }

  getCountryGlobal(): Observable<Global> {
    return this.http.get<Global>(this.rutaApp);
  }

  getContryArray() {
    return this.http.get(this.rutaApp).pipe(
      map(result => {
        return result['Countries'];
      })
    );
  }


}

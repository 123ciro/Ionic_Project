import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Paises } from '../../models/paises';
import { Model, ModelFactory } from 'ngx-model';

@Injectable()
export class PaisesService {

    private model: Model<Paises[]>;
    
paises$: Observable<Paises[]>;
    constructor(private http: HttpClient, public modelFactory: ModelFactory<Paises[]>) {

        this.model = this.modelFactory.create([]);
        this.paises$ = this.model.data$

        

    }

   

      

    get() {
        this.http.get('https://restcountries.eu/rest/v2/all')
        .timeout(5000)//ejecuta en 5 s


            .map((data: any) => {
                return data.map(item => {
                    let pais = new Paises();
                    pais.capital = item.capital;
                    pais.name = item.name;
                    pais.region = item.region;
                    pais.flag=item.flag;
                    pais.subregion= item.subregion;
                    pais.population=item.population;
                    pais.dominio=item.topLevelDomain
                    pais.codigonumerico=item.numericCode;
                    pais.moneda=item.currencies[0].name;
                    pais.codigollamada=item.callingCodes;
                    pais.lenguaje=item.languages[0].name;

                    

                    return pais; //retornamos los valores 

               
                })
            })
            .catch((error) => {
                console.log(error);
                return [];
            })
            .subscribe((data) => {
                console.log(data);
                this.model.set(data); // nuevo valor a emitirse
            })

    }

    




}


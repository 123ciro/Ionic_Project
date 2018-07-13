import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Paises } from '../../models/paises';
import { Model, ModelFactory } from 'ngx-model';
import { RestApiService } from '../rest-api.service';

@Injectable()
export class PaisesService {

    private model: Model<Paises[]>;
    data: any;

    errorMessage: string;
    page=1
    perPage = 0;
    totalData = 0;
    totalPage = 0;
    paises$: Observable<Paises[]>;
    paises: Paises[] = []
    constructor(public rest: RestApiService, public modelFactory: ModelFactory<Paises[]>) {

        this.model = this.modelFactory.create([]);
        this.paises$ = this.model.data$

    }
    //Sirve para traer los datos de la API REST

    get() {
        this.rest.getObservable('https://restcountries.eu/rest/v2', 'all', {
            timeout: 3000,
            objeto: new Paises(),
        })
            .subscribe((data) => {
                this.paises = data;
                this.model.set(data);
            })
    }

    //Funcion para filtrar los datos por nombre
    buscar(term: string) {
        term = term.toLowerCase().trim();
        // let temp = this.model.get();
        let temp = this.paises;
        temp = temp.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
        this.model.set(temp);
    }




   doInfinite(infiniteScroll) {
     this.page = this.page + 1;
     setTimeout(() => {
      this.rest.getObservable('https://restcountries.eu/rest/v2', 'all', {
        timeout: 3000,
        objeto: new Paises(),
    })
    .subscribe((data) => {
      this.paises = data;
      this.model.set(data);
             for (let i = 0; i < this.data.data.length; i++) {
               this.paises.push(this.data.data[i]);
             }
           },
           error => this.errorMessage = <any>error);

       console.log('Async operation has ended');
       infiniteScroll.complete();
     }, 1000);
   }


}





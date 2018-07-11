import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Paises } from '../../models/paises';
import { Model, ModelFactory } from 'ngx-model';
import { RestApiService } from '../rest-api.service';

@Injectable()
export class PaisesService {

    private model: Model<Paises[]>;

    paises$: Observable<Paises[]>;
    paises: Paises[] = []
    constructor(public rest: RestApiService, public modelFactory: ModelFactory<Paises[]>) {

        this.model = this.modelFactory.create([]);
        this.paises$ = this.model.data$

    }

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

    buscar(term: string) {



        term = term.toLowerCase().trim();
        // let temp = this.model.get();
        let temp = this.paises;
        temp = temp.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
        this.model.set(temp);
    }
}





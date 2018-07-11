import { Model, ModelFactory } from 'ngx-model';
import { RestApiService } from '../rest-api.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {Clientes} from '../../models/clientes';


@Injectable()
export class ClienteService {

    private model: Model<Clientes[]>;

    clientes$: Observable<Clientes[]>;
    cliente: Clientes[] = []
    constructor(public rest: RestApiService, public modelFactory: ModelFactory<Clientes[]>) {

        this.model = this.modelFactory.create([]);
        this.clientes$ = this.model.data$

    }

    get() {
        this.rest.getObservable('https://jsonplaceholder.typicode.com', 'users', {
            timeout: 3000,
            objeto: new Clientes()
        })
            .subscribe((data) => {
                this.cliente = data;
                this.model.set(data);
            })




    }

    buscar(term: string) {



        term = term.toLowerCase().trim();
        // let temp = this.model.get();
        let temp = this.cliente;
        temp = temp.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
        this.model.set(temp);
    }
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuarios } from '../../models/usuarios';
import { Model, ModelFactory } from 'ngx-model';
import { RestApiService } from '../rest-api.service';

@Injectable()
export class UsuariosService {

    private model: Model<Usuarios[]>;

    usuarios$: Observable<Usuarios[]>;
    usuarios: Usuarios[] = []
    constructor(public rest: RestApiService, public modelFactory: ModelFactory<Usuarios[]>) {

        this.model = this.modelFactory.create([]);
        this.usuarios$ = this.model.data$

    }

    get() {
        this.rest.getObservable('http://localhost:3000', 'usuarios', {
            timeout: 3000,
            objeto: new Usuarios(),


        })
            .subscribe((data) => {
                this.usuarios = data;

                this.model.set(data);
            })




    }

    buscar(term: string) {



      term = term.toLowerCase().trim();
      // let temp = this.model.get();
      let temp = this.usuarios;
      temp = temp.filter((item) => {
          return item.nombre.toLowerCase().indexOf(term) > -1;
      });
      this.model.set(temp);
  }
}





import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class RestApiService {


    constructor(public http: HttpClient) {

    }
    getObservable(url: string, link: string, obj) {
        let timeout = obj.timeout || 5000;
        let objeto = obj.objeto || {};

        return this.http.get(url + '/' + link )
            .timeout(timeout)
            .map((data: any) => this.mapData(data, objeto))
            .catch((error) => {
                console.log(error);
                return [];
            })
    }

    private mapData(data: Array<{}>, objeto) {
        if (JSON.stringify(objeto) === '{}'){
            return data;


        }
            return data.map(item => {
                let obj = Object.assign({}, objeto);
                for (let i in obj) {
                    obj[i]=item[i];
                }
                return obj;
            })
    }
    getHeaders() {
      let httpOptions = { //Se crea un encabezado http\
        headers: new HttpHeaders({ //Parametros
          'token': localStorage.getItem('token') || ''
        })
      };
      return httpOptions;
  }


    post(url: string, link: string, body: any) {
      return this.http.post(url + '/' + link, body, this.getHeaders()).toPromise();
    }

}

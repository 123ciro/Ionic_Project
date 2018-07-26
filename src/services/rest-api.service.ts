import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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


//agregar datos

// public createProduct(usu: Usuarios) {
// }


// public createProduct(url: string, link: string, usu: Usuarios) {
//   return this.http
//     .post(url + link , usu)
//     .map(response => {
//       return new Usuarios(response);
//     })
//     .catch((error)=>{
//         console.error(error);
//     });
// }


}

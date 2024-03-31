import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }



  public listado(){
    return this.httpClient.get(`${baseUrl}/api/celular/listar`);

  }


}

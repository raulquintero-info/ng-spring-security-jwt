import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listado: any = [];
  constructor( private productosService: ProductosService){}

  ngOnInit(){

    this.productosService.listado().subscribe({
      next: (data: any)=>{
        console.log(data);
        this.listado = data.phoneList;
      }
    })

  }




}

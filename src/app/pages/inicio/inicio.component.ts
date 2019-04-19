import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  items=[
   {
     ima:"assets/ima/slider/carro1.jpg",
     modelo:"Auto modelo 1",
     descripcion:"Este auto es genial",
     precio:15000
   },
   {
    ima:"assets/ima/slider/carro2.jpg",
    modelo:"Auto modelo 2",
    descripcion:"Este auto tambien es genial",
    precio:18000
  },
  {
    ima:"assets/ima/slider/carro3.jpg",
    modelo:"Auto modelo 3",
    descripcion:"Este auto no es tan genial",
    precio:21000
  },
  {
    ima:"assets/ima/slider/carro1.jpg",
    modelo:"Auto modelo 4",
    descripcion:"Este tampoco es tan genial",
    precio:14000
  }
 ]
  constructor() {
  }
  ngOnInit() {
  }

}

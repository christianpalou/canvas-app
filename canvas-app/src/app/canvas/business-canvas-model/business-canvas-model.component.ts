import { Component, OnInit } from '@angular/core';
import {CardData} from "../components/card-canvas/cardData";

@Component({
  selector: 'app-business-canvas-model',
  templateUrl: './business-canvas-model.component.html',
  styleUrls: ['./business-canvas-model.component.scss']
})
export class BusinessCanvasModelComponent implements OnInit {

  cardData1: CardData= new CardData('Clientes y proveedores', 'white', 1);
  cardData2: CardData= new CardData('Nuevo', 'white', 1);
  cardData3: CardData= new CardData('Nuevo', 'white', 3);
  cardData4: CardData= new CardData('Nuevo', 'white', 4);
  listData: CardData[]  = [this.cardData1,this.cardData2, this.cardData3, this.cardData4];

  constructor() { }

  ngOnInit() {
  }

  newCard(){
    this.listData.push(new CardData('hola', 'white',1));
    console.log(this.listData.length);
    console.log(this.listData);
  }

}

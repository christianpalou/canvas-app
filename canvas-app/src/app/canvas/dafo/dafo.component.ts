import { Component, OnInit } from '@angular/core';
import {CardData} from "../components/card-canvas/cardData";

@Component({
  selector: 'app-dafo',
  templateUrl: './dafo.component.html',
  styleUrls: ['./dafo.component.scss']
})
export class DafoComponent implements OnInit {

  cardData1: CardData= new CardData('Clientes y proveedores', 'white', 1);
  cardData2: CardData= new CardData('Nuevo', 'white', 1);
  cardData3: CardData= new CardData('Nuevo', 'white', 3);
  cardData4: CardData= new CardData('Nuevo', 'white', 4);
  listData: CardData[]  = [this.cardData1,this.cardData2, this.cardData3, this.cardData4];

  constructor() { }

  ngOnInit() {
  }

  newCard(space: number){
    this.listData.push(new CardData('hola', 'white',space));
    console.log(this.listData.length);
    console.log(this.listData);
  }

}

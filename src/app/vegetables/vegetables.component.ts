import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
  exportAs: 'vegetablesList'
})
export class VegetablesComponent implements OnInit {
  veggies:any[]=[{title:"Onion",price:150,quantity:500},
  {title:"LadyFinger",price:50,quantity:20},
  {title:"Potatoes",price:45,quantity:100}
  ];
  cucumber={title:"Cucumber",price:90,quantity:2};
  
  constructor() { }

  ngOnInit(): void {
  }
  addCucumber():void{
    this.veggies.push(this.cucumber);
  }

  @Output() onBuy = new EventEmitter<string>();
  buy(vegName: string){
    this.onBuy.emit(vegName);
  }
}

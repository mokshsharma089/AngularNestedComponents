import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
  exportAs: 'fruitList',
})
export class FruitsComponent implements OnInit {
  fruits:any[]=[{title:"Apple",price:300,quantity:120},
  {title:"Orange",price:145,quantity:50},
  {title:"Orange",price:245,quantity:589},
  {title:"Litchi",price:80,quantity:1500},
  {title:"WaterMelon",price:550,quantity:20},
  {title:"Mango",price:450,quantity:350}
  ];
  fruitSearchResult:any[];
  constructor() { }

  ngOnInit(): void {
  }
  //to take input from parent component
  @Input() set cFruit(name: string) {
    this.fruitSearchResult=[];
    for(let i=0;i<this.fruits.length;i++){
      if(name===this.fruits[i].title){
        this.fruitSearchResult.push(this.fruits[i]);
      }
    }
  }

  @Output() onBuy = new EventEmitter<string>();
  buy(fruitName: string){
    this.onBuy.emit(fruitName);
  }
}

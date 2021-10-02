import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nestedProject';
  bannerUrl = 'assets/banner.jpeg';
  showFruits:boolean=true;
  fruitName:string="Orange";
  message: string;
  buyFruitAppComponent(fruitName: string) {
    this.message = `Fruit Eaten : Your purchase for ${fruitName} is successful`;
  }
  buyVegAppComponent(vegName: string) {
    this.message = `Veggie Eaten : Your purchase for ${vegName} is successful`;
  }
  toggleFruits():void{
    if(this.showFruits==false){
      this.showFruits=true;
    }
    else{
      this.showFruits=false;
    }
  }
}


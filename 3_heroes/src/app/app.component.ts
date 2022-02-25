import { Component } from '@angular/core';
import Hero from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3_heroes';
  hero : Hero = {
    name:'john',
    id : 50
  }
  
  onFunc(){
    this.title = this.title ? '' : 'hello world';
  }

  onChange(){

  }

}

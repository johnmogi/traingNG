import { Component, OnInit } from '@angular/core';
import Hero from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero?: Hero ;
 
  onSelect(hero: Hero): void {

    this.hero = hero;
    console.log(hero);
    
   }
  constructor() {

    
   }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import Hero from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  heroes = HEROES;
  onSelect(hero: Hero): void {

    this.hero = hero;
    console.log(hero);
    
   }
  @Input() hero?: Hero 
  constructor() { }

  ngOnInit(): void {
  }

}

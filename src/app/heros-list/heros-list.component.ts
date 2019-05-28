import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { MockResourceLoader } from '@angular/compiler/testing';
import { HeroServiceService } from '../Services/hero-service.service';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroServiceService) { 
    
  }

  ngOnInit() {
    this.heroService.getHeros()
      .subscribe(heroes=> this.heroes = heroes);
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }
}

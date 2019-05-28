import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes: string = "Top Heroes";
  heros:Hero[] = [
    {id: 1, name: "Narco"},
    {id: 2, name: "Bombasto"},
    {id: 3, name: "Celeritas"},
    {id: 4, name: "Magneta"}
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  heroes: Hero[] = [
    {id:11, name: "Mr. Nice"},
    {id:12, name: "Narco"},
    {id:13, name: "Bombasto"},
    {id:14, name: "Celeritas"},
    {id:15, name: "Magneta"},
    {id:16, name: "RubberMan"},
    {id:17, name: "Dynama"},
    {id:18, name: "Dr IQ"},
    {id:19, name: "Magma"},
    {id:20, name: "Tornado"},
  ]
  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("Fetched Heroes");
    return of(this.heroes);
  }
}

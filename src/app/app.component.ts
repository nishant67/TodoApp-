import { Component } from '@angular/core';
import { HeroModel } from './model/hero.component.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
    // this.router.events.subscribe(e => console.log(e));
    this.SuperHeroList = [
      {
        id: 1, value: "IronMan"
      },
      {
        id: 2, value: "SpiderMan"
      },
      {
        id: 3, value: "Thor"
      },
      {
        id: 4, value: "Hulk"
      },
      {
        id: 5, value: "Dr. Strange"
      }
    ]

  }
  title = 'ToDoApp';
  showPage: string = "view";
  SuperHeroList: HeroModel[];


  }


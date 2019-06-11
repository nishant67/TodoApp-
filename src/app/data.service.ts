import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  SuperHeroList : any;
  constructor() {
    this.SuperHeroList = [
      {
        id: 0, value: "IronMan"
      },
      {
        id: 1, value: "SpiderMan"
      },
      {
        id: 2, value: "Thor"
      },
      {
        id: 3, value: "Hulk"
      },
      {
        id: 4, value: "Dr. Strange"
      },
      {
        id: 5, value: "Hawkeye"
      }
    ]
   }


   getSuperHero() {
     return this.SuperHeroList;
   }

   addSuperHero(data) {
    this.SuperHeroList = data;
   }
}


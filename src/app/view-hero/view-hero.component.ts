import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.css']
})
export class ViewHeroComponent implements OnInit {

  SuperHeroList: any[];
  SuperHeroName: any;
  Status : string = "add";
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.SuperHeroList = this.dataservice.getSuperHero();


  }

  addSuperhero(name) {
    this.SuperHeroList.push({ id: this.SuperHeroList.length, value: name });
    console.log(this.SuperHeroList);
    this.SuperHeroName =""
    this.Status = "add";
    
  }

  editSuperHero(i){
    this.SuperHeroList.forEach(e=> {
      if(e.id == i){
        this.SuperHeroName = e.value;
      }
    });
    this.Status = "edit"
  }

  deleteSuperHero(i)
  {
    this.SuperHeroList.splice(i,1);
    console.log(this.SuperHeroList);
  }
}

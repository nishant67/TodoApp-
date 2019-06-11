import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  SuperHeroList: any;
  SuperHeroName: any;
  SuperHero : any ="";
  constructor(private dataservice : DataService) {
       
  }

  ngOnInit() {
    this.SuperHeroList = this.dataservice.getSuperHero(); 
  }

  onEdit(item,i) {
    this.SuperHero = item;
    this.SuperHeroList.forEach(e => {
      if (e.id == item.id) {
        this.SuperHeroName = e.value
      }
    });
    console.log(i);
    
  }

  onSubmit(){
    if(this.SuperHeroName.length>0){
      this.SuperHeroList.forEach(e => {
        if (e.id == this.SuperHero.id) {
            e.value = this.SuperHeroName
        }
      });
      this.SuperHero = '';
      this.SuperHeroName ="";
    }
    else {
      alert("Fill the name")
    }
   
    

  }

}

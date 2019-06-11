import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SuperHeroList: any;
  pageStatus: boolean = false;
  data: any;
  constructor() {
  }

  ngOnInit() {

  }

  show(page) {
   
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroA = 'Enzo';
  heroB = 'Maxwell';

  constructor() { }

  ngOnInit() {
  }

}

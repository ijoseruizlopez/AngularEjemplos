import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {

  bandera=false;

  constructor() { }

  ngOnInit() {
  }

  changeBandera() {
     this.bandera=!this.bandera;
  }
}

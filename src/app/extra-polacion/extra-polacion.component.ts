import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-polacion',
  templateUrl: './extra-polacion.component.html',
  styleUrls: ['./extra-polacion.component.css']
})
export class ExtraPolacionComponent implements OnInit {

  title:string;
  constructor() { 
    this.title="Este es el titulo";
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  users : string[]= ['Jose', 'Dayana', 'Enrique'];
  
  constructor() { }

  ngOnInit() {
  }

}

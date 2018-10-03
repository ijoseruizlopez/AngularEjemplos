import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-component',
  templateUrl: './call-component.component.html',
  styleUrls: ['./call-component.component.css']
})
export class CallComponentComponent implements OnInit {

  users : string[]= ['Jose', 'Dayana', 'Enrique'];

  name: string;
  age:number;
  hobbies: string[];
  adress: {
      street:string;
      city:string;
  }


  constructor() { 
    this.name="Jose Ruiz";
    this.age=28;
    this.hobbies=['swimming','read','write'];
    this.adress= {
        street:'calle',
        city:'Cordoba'
    }
  }

  ngOnInit() {
  }

}

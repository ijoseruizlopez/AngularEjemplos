import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-object-component',
  templateUrl: './call-object-component.component.html',
  styleUrls: ['./call-object-component.component.css']
})
export class CallObjectComponentComponent implements OnInit {

  users : string[]= ['Jose', 'Dayana', 'Enrique'];

  constructor() { }

  ngOnInit() {
  }

}

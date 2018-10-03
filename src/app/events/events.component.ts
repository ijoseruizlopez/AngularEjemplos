import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  users : string[]= ['Jose', 'Dayana', 'Enrique'] ;


  constructor() { }

  ngOnInit() {
  }


  /*Metodos*/
  sayHello()
  {
      alert("hola");
  }

  addUser(newUser){
      this.users.push(newUser);
      return false;
  }

  deleteUser(user){
      for (let index = 0; index < this.users.length; index++) {
          
          if(this.users[index]==user)
              this.users.splice(index, 1);
      } 
  }
}

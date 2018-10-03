import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css']
})
export class WebAPIComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService) { 

  /*llamada al servicio y llenamos los datos */
    this.dataService.getData().subscribe(data=>
       this.posts = data)

  }

  ngOnInit() {
  }

}

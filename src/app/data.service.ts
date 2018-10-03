import { Injectable } from '@angular/core';

/*Permite hacer peticiones http */
import {HttpClient} from '@angular/common/http';

/*Importamos la interfaz que vamos a utilizar */
import {Post} from './Interfaces/Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { 
    console.log('Service is working!')
  }

  getData(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}

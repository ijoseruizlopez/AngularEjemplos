import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Tambien debemos importar el httpClient por que tengo un servicio que hace uso de esta
import {HttpClientModule} from '@angular/common/http';
//Importamos modulo para enrutamiento
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
//Aca se importa la CLASE del componente
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ExtraPolacionComponent } from './extra-polacion/extra-polacion.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { CallComponentComponent } from './call-component/call-component.component';
import { CallObjectComponentComponent } from './call-object-component/call-object-component.component';
import { EventsComponent } from './events/events.component';
import { BindingComponent } from './binding/binding.component';
import { WebAPIComponent } from './web-api/web-api.component';

//Importamos el Modulo para hacer el bindeo con formularios
import { FormsModule} from '@angular/forms'

//Importamos los servicios que cree
import {DataService} from './data.service';


//constantes de rutas navegables
const routes: Route[]=[
  {path:'extraPolacion' , component:ExtraPolacionComponent},
  {path:'binding' , component:BindingComponent},
  {path:'callComponent' , component:CallComponentComponent},
  {path:'callObjectComponent' , component:CallObjectComponentComponent},
  {path:'ciclos' , component:CiclosComponent},
  {path:'condicionales' , component:CondicionalesComponent},
  {path:'events' , component:EventsComponent},
  {path:'WebAPI' , component:WebAPIComponent},
  {path:'about' , component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ExtraPolacionComponent,
    CiclosComponent,
    CondicionalesComponent,
    CallComponentComponent,
    CallObjectComponentComponent,
    EventsComponent,
    BindingComponent,
    WebAPIComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) //Importamos las rutas navegables
  ],
  providers: [DataService], //Los servicios (que se crean) u otros
  bootstrap: [AppComponent]
})
export class AppModule { }

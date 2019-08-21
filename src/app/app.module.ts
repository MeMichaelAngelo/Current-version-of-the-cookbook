import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowyPrzepisComponent } from './nowy-przepis/nowy-przepis.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAutorzeComponent } from './oautorze/oautorze.component';
import { SpisSkladnikowComponent } from './spis-skladnikow/spis-skladnikow.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ZbiorPrzepisowComponent } from './zbior-przepisow/zbior-przepisow.component';
import { EdycjaPrzepisuComponent } from './edycja-przepisu/edycja-przepisu.component';

const appRoutes: Routes = [
  {
  path: '',
  component: BodyComponent
  },

  {
    path: 'nowyprzepis-router',
    component: NowyPrzepisComponent
  },

  {
    path: 'oautorze-router',
    component: OAutorzeComponent
  },

  {
    path: 'spisskladnikow-router',
    component: SpisSkladnikowComponent
  },

  {
    path: 'zbior-przepisow-router',
    component: ZbiorPrzepisowComponent
  },

  {
    path: 'edycja-przepisu-router',
    component: EdycjaPrzepisuComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NowyPrzepisComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    OAutorzeComponent,
    SpisSkladnikowComponent,
    ZbiorPrzepisowComponent,
    EdycjaPrzepisuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [HttpService], // tutaj dodaje sie wszystkie serwisy
  bootstrap: [AppComponent]
})
export class AppModule { }

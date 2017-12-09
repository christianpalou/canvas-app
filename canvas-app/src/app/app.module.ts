import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {DragulaModule} from "ng2-dragula";
import { AppComponent } from './app.component';
import { CardCanvasComponent } from './canvas/components/card-canvas/card-canvas.component';
import { HeaderComponent } from './header/header.component';
import { BusinessCanvasModelComponent } from './canvas/business-canvas-model/business-canvas-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCardsBagPipe } from './utils/filter-cards-bag.pipe';
import { FooterComponent } from './footer/footer.component';
import { BagCanvasComponent } from './canvas/components/bag-canvas/bag-canvas.component';
import { AngularFireModule} from 'angularfire2';
import {GoogleAuthServiceService} from "./services/google-auth-service.service";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Routes, RouterModule} from "@angular/router";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


export const firebaseConfig = {
  apiKey: "AIzaSyB2-o9cJazbXpuAuj73e-yX0GyjwrsgHcc",
  authDomain: "canvas-app-c0df2.firebaseapp.com",
  databaseURL: "https://canvas-app-c0df2.firebaseio.com",
  projectId: "canvas-app-c0df2",
  storageBucket: "canvas-app-c0df2.appspot.com",
  messagingSenderId: "878726484395"
};

const appRoutes: Routes = [
  { path: 'canvas/bcm',      component: BusinessCanvasModelComponent },
  { path: 'home',      component: HomePageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardCanvasComponent,
    HeaderComponent,
    BusinessCanvasModelComponent,
    FilterCardsBagPipe,
    FooterComponent,
    BagCanvasComponent,
    HomePageComponent,
    LandingPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [GoogleAuthServiceService, AngularFireAuth,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

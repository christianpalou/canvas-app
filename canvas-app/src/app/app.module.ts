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


@NgModule({
  declarations: [
    AppComponent,
    CardCanvasComponent,
    HeaderComponent,
    BusinessCanvasModelComponent,
    FilterCardsBagPipe,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    DragulaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

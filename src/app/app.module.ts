import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentsComponent } from './components/nav-components/nav-components.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponentsComponent } from './components/aside-components/aside-components.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentsComponent,
    MainComponent,
    AsideComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

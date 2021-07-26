import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AppRoutingModule } from './app-routing.module';
import { ComparepasswordComponent } from './comparepassword/comparepassword.component';
import { ComparepasswordwithtempComponent } from './comparepasswordwithtemp/comparepasswordwithtemp.component';
import { TemplatevalidationformComponent } from './templatevalidationform/templatevalidationform.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveformComponent,
    ComparepasswordComponent,
    ComparepasswordwithtempComponent,
   TemplatevalidationformComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

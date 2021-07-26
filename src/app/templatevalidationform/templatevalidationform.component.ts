import { Component, OnInit } from '@angular/core';
import { registration } from '../Models/registration';

@Component({
  selector: 'app-templatevalidationform',
  templateUrl: './templatevalidationform.component.html',
  styleUrls: ['./templatevalidationform.component.css']
})
export class TemplatevalidationformComponent  {

  registration_model:registration=new registration();
  name:string="amit kumar";
  url:string="https://www.google.com";
  constructor() {
    
   }

   greet(){
     alert(`Hi ${this.name}`);
   }
  
 

}

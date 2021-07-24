import { Component, OnInit } from '@angular/core';
import { registration } from '../Models/registration';

@Component({
  selector: 'app-templatevalidationform',
  templateUrl: './templatevalidationform.component.html',
  styleUrls: ['./templatevalidationform.component.css']
})
export class TemplatevalidationformComponent implements OnInit {

  registration_model:registration=new registration();
  constructor() {
    
   }
  
  ngOnInit(): void {
  }

}

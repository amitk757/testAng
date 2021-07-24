import { Component, OnInit,NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userdata } from '../userdata';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
 
user:userdata;

  constructor() { 
this.user = new userdata();
  }

  ngOnInit(): void {
  }

}

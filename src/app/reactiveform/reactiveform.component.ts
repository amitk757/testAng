import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html'
})
export class ReactiveformComponent implements OnInit {

  usergroup:FormGroup;
  constructor(private _formbuilder:FormBuilder){
  this.usergroup= _formbuilder.group({
    Namegp:['',[Validators.required,Validators.minLength(3)]],
    passwordgp:['',Validators.required]
  })
  }


  ngOnInit(): void {
  }

}

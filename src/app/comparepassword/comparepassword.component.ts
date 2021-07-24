import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparepassword',
  templateUrl: './comparepassword.component.html'
})
export class ComparepasswordComponent implements OnInit {
  userGroup:FormGroup;
  constructor(private _formbuilde:FormBuilder) {
    this.userGroup=_formbuilde.group(
      {password:['',[Validators.required,Validators.minLength(6)]]},
      {confirmpassword:['',[Validators.required,Validators.minLength(6)]]},
    )
   }

  ngOnInit(): void {
  }

  
  
}

import { Component, OnInit } from '@angular/core';


class checkClass{
  password:string|undefined
  confirmPassword:string|undefined

}

@Component({
  selector: 'app-comparepasswordwithtemp',
  templateUrl: './comparepasswordwithtemp.component.html'
})
export class ComparepasswordwithtempComponent implements OnInit {

  _class:checkClass;
  constructor() {
    this._class={
      password:'',
      confirmPassword:''
    }
   }

  ngOnInit(): void {
  }

}

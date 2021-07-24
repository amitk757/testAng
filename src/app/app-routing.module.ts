import { NgModule } from '@angular/core';
import { TemplateComponent } from './template/template.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Route,RouterModule, Routes } from '@angular/router';
import { ComparepasswordComponent } from './comparepassword/comparepassword.component';
import { ComparepasswordwithtempComponent } from './comparepasswordwithtemp/comparepasswordwithtemp.component';
import { TemplatevalidationformComponent } from './templatevalidationform/templatevalidationform.component';


const routes:Routes=[
  {path:'templatecomponent',component:TemplateComponent},
  {path:'templatecomponent',component:TemplateComponent},
  {path:'reactiveformcomponent',component:ReactiveformComponent},
  {path:'comparepassword',component:ComparepasswordComponent},
  {path:'tempaltevalidationform',component:TemplatevalidationformComponent}
 
];


@NgModule({
  
  imports: [  RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

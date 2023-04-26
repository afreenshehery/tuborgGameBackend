import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SelfyCamraComponent } from './components/selfy-camra/selfy-camra.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { WelcomVdoComponent } from './components/welcom-vdo/welcom-vdo.component';

const routes: Routes = [
  {path:'image', component:WelcomVdoComponent},
  {path:'',component:RegistrationFormComponent},
  {path:'selfy',component:SelfyCamraComponent},
  {path:'thankyou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

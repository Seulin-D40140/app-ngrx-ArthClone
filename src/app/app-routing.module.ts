import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftComponent } from './components/aircraft/aircraft.component';
import { LoginComponent } from './components/login/login.component';
import { LoguserGuard } from './guard/loguser.guard';
import { LockloginGuard } from './guard/locklogin.guard';

const routes: Routes = [
  { 
    path : 'aircrafts' , component : AircraftComponent,
    canActivate : [LoguserGuard]
  },
  { 
    path : 'login' , component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

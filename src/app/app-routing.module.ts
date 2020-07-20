import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {RegisterComponent} from "./Components/register/register.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TraitementComponent} from "./Components/traitement/traitement.component";
import {NewTraitementComponent} from "./Components/new-traitement/new-traitement.component";
import {LeftBarComponent} from "./Components/left-bar/left-bar.component";
import {HeaderComponent} from "./Components/header/header.component";
import {UserdropComponent} from "./Components/userdrop/userdrop.component";
import {LogoutComponent} from "./Components/logout/logout.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'traitement', component: TraitementComponent},

  {path: 'newtraitement', component: NewTraitementComponent},

  {path: 'logout', component: LogoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BsDatepickerModule.forRoot(),
            BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

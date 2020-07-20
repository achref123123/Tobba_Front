import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {DatePipe} from "@angular/common";
import {TraitementComponent} from './Components/traitement/traitement.component';
import { NewTraitementComponent } from './Components/new-traitement/new-traitement.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LeftBarComponent } from './Components/left-bar/left-bar.component';
import { UserdropComponent } from './Components/userdrop/userdrop.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';
import { LogoutComponent } from './Components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TraitementComponent,
    NewTraitementComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    UserdropComponent,
    ChatbotComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MedicalService} from "../../Services/MedicalService";
import {UserService} from "../../Services/UserService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  traitements
  profile
  constructor(public route: Router,private medicalService: MedicalService, private userService:UserService ) { }

  ngOnInit(): void {
    console.log("this is dashboard page")
    console.log(sessionStorage.getItem('userToken '))
    this.profileUser()
    this.getUserTraitement()

  }

  profileUser(){
    this.userService.profileUser().subscribe(res => {
      // console.log(res)
      this.profile= res
      console.log(res)
      console.log(res.username)


    }, error => {
      console.log(error)
    })
  }

  logout(){
    localStorage.removeItem('userToken')
    this.route.navigate(['login'])
  }
  getUserTraitement(){
    this.medicalService.getUserTraitement().subscribe(
      res => {
        this.traitements=res
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/UserService";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  log;
  loginForm: FormGroup;

  constructor(private userService: UserService, private route: Router,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });

  }


  login() {
    console.log(this.loginForm)
    this.userService.loginUser(this.loginForm.value).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('userToken', res['auth_token'])
        this.route.navigate(['dashboard'])
      });


    error => {
      console.log('error', error);
    }

  }

  reg() {
    this.route.navigate(['register'])
  }
}





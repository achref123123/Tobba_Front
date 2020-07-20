import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/UserService";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

datePickerConfig : Partial<BsDatepickerConfig>;
  register;
  registerForm: FormGroup;

  constructor(private userService: UserService, public datepipe: DatePipe , private route: Router , private formBuilder: FormBuilder,) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-blue'});

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      birth_date: [null, [Validators.required]],
      phonenumber: [null, [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
      role_subscriber: [1, [Validators.required]],

    });

  }

  registerUser() {
    this.datepipe.transform(this.registerForm.value.birth_date,'yyyy-MM-dd');
    this.userService.registerUser(this.registerForm.value).subscribe(


      response => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      },
       error => console.log('error', error)
    );

  }

  validateInputs(){
    return this.registerForm.invalid
  }


  log() {
    this.route.navigate(['login'])

  }


}

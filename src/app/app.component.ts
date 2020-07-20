import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';

  constructor(private route: Router,) {
  }

  ngOnInit() {
    if ( localStorage.getItem('userToken') == undefined || localStorage.getItem('userToken') == null){
      this.route.navigate(['login'])
    }
    else {
      return
    }

  }

}

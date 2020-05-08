import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../api/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
     this.alertify.warning('This part of the app is not functional yet!');

    }
}

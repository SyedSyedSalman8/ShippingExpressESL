import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../api/alertify.service';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
subscription: any;
  constructor(private alertify: AlertifyService, private platform: Platform, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line: no-string-literal
        this.navCtrl.navigateForward('/dashboard');
    });
}

ionViewWillLeave() {
  this.subscription.unsubscribe();
}

  login() {
     this.alertify.warning('This part of the app is not functional yet!');

    }
}

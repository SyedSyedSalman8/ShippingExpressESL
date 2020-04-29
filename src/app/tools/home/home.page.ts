import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subscription: any;
  constructor(private navCtrl: NavController, private platform: Platform) { }

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

  goToFeedback() {
    this.navCtrl.navigateForward('/feedback');
  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  goToContact() {
    this.navCtrl.navigateForward('/contact');
  }

  goToCalc() {
    this.navCtrl.navigateForward('/calculator');
  }
}

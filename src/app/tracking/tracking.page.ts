import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  subscription: any;
  constructor(private platform: Platform, private navCtrl: NavController) { }

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

}

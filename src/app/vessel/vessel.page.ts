import { Component, OnInit } from '@angular/core';
import { AlertController, Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.page.html',
  styleUrls: ['./vessel.page.scss'],
})
export class VesselPage implements OnInit {
subscription: any;
  constructor(private alert: AlertController, private platform: Platform, private navCtrl: NavController) { }

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

  openBOML() {
    this.navCtrl.navigateForward('/vessel/boml');
  }


   openAICT() {
    this.navCtrl.navigateForward('/vessel/aict');
  }

   openPKSH() {
    this.navCtrl.navigateForward('/vessel/pshaheen');
  }

  openNLCT() {
    this.navCtrl.navigateForward('/vessel/nlct');
  }

 openBAYWEST() {
  this.navCtrl.navigateForward('/vessel/baywest');
  }



}

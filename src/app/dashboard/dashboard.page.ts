import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Query } from '@angular/compiler/src/core';
import { QueryPage } from '../query/query.page';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  folder: any;
  query: QueryPage;
  subscription: any;
  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController, private platform: Platform) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line: no-string-literal
        navigator['app'].exitApp();
    });
}

ionViewWillLeave() {
  this.subscription.unsubscribe();
}

  goToQuery() {
    this.navCtrl.navigateForward('/query');
  }

  goToNews() {
    this.navCtrl.navigateForward('/news');
  }

  goToRates() {
    this.navCtrl.navigateForward('/rates');
  }

  goToBooking() {
    this.navCtrl.navigateForward('/booking');
  }
  goToTools() {
    this.navCtrl.navigateForward('/home');
  }

  goToTracking() {
    this.navCtrl.navigateForward('/tracking');
  }
}

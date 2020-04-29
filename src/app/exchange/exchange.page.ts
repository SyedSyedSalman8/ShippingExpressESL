import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  data: any;
  subscription: any;
  constructor(private service: ServiceService, private platform: Platform, private navCtrl: NavController) { }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
        // tslint:disable-next-line: no-string-literal
        this.navCtrl.navigateForward('/dashboard');
    });
}

ionViewWillLeave() {
  this.subscription.unsubscribe();
}

  ngOnInit() {
    this.service.getExchangeRates().subscribe((data: (any)) => this.data = data);
  }



}

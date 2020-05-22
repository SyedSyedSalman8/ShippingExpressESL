import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Platform, NavController } from '@ionic/angular';
import { AlertifyService } from '../api/alertify.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExchangePage implements OnInit {
  data: any;
  subscription: any;
  showSplash = true;

  constructor(private service: ServiceService, private platform: Platform,
              private navCtrl: NavController, private alertify: AlertifyService) { }

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
    this.service.getExchangeRates().subscribe((data: (any)) => { 
    this.data = data;
    this.showSplash = false; // <-- hide animation after 3s
   }, error => {
      this.alertify.error('Something went wrong');
    });
  }



}

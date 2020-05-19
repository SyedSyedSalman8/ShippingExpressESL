import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertifyService } from '../api/alertify.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  subscription: any;
  baseUrl = environment.baseUrl;
  bl: any;
  bldata: any;

  constructor(private platform: Platform, private navCtrl: NavController,
              private http: HttpClient, private alertify: AlertifyService) { }

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

blTrackDetails() {
  console.log('inside tracking');
  return this.http.get(this.baseUrl + 'api/api/post/read_ronum.php', {
    params: {
      type: 'mbl',
      mbl: this.bl
    },
  }).subscribe(data => {
    this.bldata = data;
    console.log(this.bldata.idx);
    console.log('inside sunscribe');
  }, error => {
    this.alertify.error('Something went wrong!');
  }, () => {
    const navigationExtras: NavigationExtras = {
      state: {
          t1: this.bldata
      }
  };
    this.navCtrl.navigateForward(['/tracking/details'], navigationExtras);
  });
}


}

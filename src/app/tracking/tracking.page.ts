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
  ro: any;
  rtype: any;

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
  console.log(this.bl + ' ' + this.ro);
  if (this.bl !== '' && this.ro === undefined || this.ro === '') {
  console.log('inside mbl');
  return this.http.get(this.baseUrl + 'api/api/post/read_ronum.php', {
    params: {
      type: 'mbl',
      mbl: this.bl
    },
  }).subscribe(data => {
    this.bldata = data;
  }, error => {
    this.alertify.error('Something went wrong!');
  }, () => {
     console.log('idx ' + this.bldata.idx);
     if (this.bldata.idx !== '-1') {
      const navigationExtras: NavigationExtras = {
      state: {
          t1: this.bldata
      }
  };
      this.navCtrl.navigateForward(['/tracking/details'], navigationExtras);
} else {
  this.alertify.error('Not Found!');
}
  });

} else if (this.bl === undefined && this.ro !== '' || this.bl === '') {
  console.log('inside ro');
  return this.http.get(this.baseUrl + 'api/api/post/read_ronum.php', {
    params: {
      type: 'ro',
      ronum: this.ro
    },
  }).subscribe(data => {
    this.bldata = data;
    console.log(this.bldata.idx);
    console.log('inside sunscribe');
  }, error => {
    this.alertify.error('Something went wrong!');
  }, () => {
    console.log(this.rtype + ' ' + this.bldata.equip);
    if (this.rtype === undefined) {
      this.alertify.error('Please Select RO Type');
    } else if (this.rtype !== undefined) {
    const navigationExtras: NavigationExtras = {
      state: {
          t1: this.bldata
      }
  };
    this.navCtrl.navigateForward(['/tracking/details'], navigationExtras);
} else {
  this.alertify.error('Not found!');
}
  });
} else if (this.bl !== '' && this.ro !== '') {
  console.log('inside both');
  this.alertify.error('please select only one');
}
}



}

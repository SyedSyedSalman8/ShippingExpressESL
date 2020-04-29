import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  data: any;
  data1: any;
  term: string;
  term1: string;
  show: any;
  show1: any;
  subscription: any;
  constructor(private service: ServiceService, private platform: Platform, private navCtrl: NavController) { }

  ngOnInit() {
    this.service.getPolPod().subscribe((data: (any)) => this.data = data);
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


  getContainerRates() {
    this.service.getContainerRates().subscribe(data => this.data1 = data);
    console.log(this.term);
    console.log(this.term1);
  }

  edit(name) {
    this.term = name;
    this.show = !this.show;
  }

  edit1(name) {
    this.term1 = name;
    this.show1 = !this.show1;
  }

  toggle() {
    console.log('clicked now');
    this.show = true;
  }

  toggle1() {
    this.show1 = true;
  }

}

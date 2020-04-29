import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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

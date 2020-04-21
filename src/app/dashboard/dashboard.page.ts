import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Query } from '@angular/compiler/src/core';
import { QueryPage } from '../query/query.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  folder: any;
  query: QueryPage;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {

  }

  goToQuery() {
    this.navCtrl.navigateForward('/query');
  }

  goToNews() {
    this.navCtrl.navigateForward('/news');
  }

}

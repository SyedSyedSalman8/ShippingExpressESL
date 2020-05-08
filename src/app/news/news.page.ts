import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../api/alertify.service';
import { ServiceService } from '../api/service.service';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  subscription: any;
  constructor(private alertify: AlertifyService,
              private linkify: NgxLinkifyjsModule, private service: ServiceService,
              private navCtrl: NavController, private platform: Platform) { }

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
      this.service.getNews().subscribe(data => {
      this.data = data;
    });
  }


}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { NavController, Platform, AlertController, ModalController } from '@ionic/angular';
import { AlertifyService } from '../api/alertify.service';


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
  constructor(private service: ServiceService, private platform: Platform,
              private navCtrl: NavController, private alert: AlertController,
              private alrtify: AlertifyService, private modal: ModalController) { }

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
    this.service.getContainerRates().subscribe(async data => { 
      this.data1 = data;
      for (const i of Object.keys(this.data1)) {
        if (this.term === this.data1[i].pol && this.term1 === this.data1[i].pod) {
          const alert = await this.alert.create({
            header: 'Container Rates',
            subHeader: 'Details are as follows:',
            inputs: [
              {
                name: 'name1',
                type: 'text',
                placeholder: 'Placeholder 1',
                value: 'Pol:' + this.data1[i].pol
              },
              {
                name: 'name2',
                type: 'text',
                id: 'name2-id',
                value: 'Pod: ' + this.data1[i].pod,
                placeholder: 'Placeholder 2'
              },
              // multiline input.
              {
                name: 'paragraph',
                type: 'textarea',
                value: 'Notes: ' + this.data1[i].notes
              },
              {
                name: 'name2',
                type: 'text',
                value: 'Rate: ' + this.data1[i].rate
              },
              {
                name: 'name2',
                type: 'text',
                value: 'Equipment: ' + this.data1[i].equip
              }],
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    }, error => {
      this.alrtify.error('Oops something went wrong');
    });
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

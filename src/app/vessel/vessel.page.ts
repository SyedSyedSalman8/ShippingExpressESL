import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.page.html',
  styleUrls: ['./vessel.page.scss'],
})
export class VesselPage implements OnInit {

  constructor(private alert: AlertController) { }

  ngOnInit() {
  }

  async openBOML() {
    console.log('clicked');
    const alert = await this.alert.create({
      header: 'BOML',
      subHeader: 'Burma Oil Address:-',
      message: '13-Dockyard Road, West Wharf, Karachi, Pakistan. UAN: 111-111-175. Fax: +92-21-2312812. E-mail: info@bifs.com.pk',
      buttons: ['OK']
    });
    await alert.present();
  }

  async openAICT() {
    const alert = await this.alert.create({
      header: 'AICT',
      // tslint:disable-next-line: max-line-length
      message: 'Sabir Khan, Manager CSD. Cell: +92 345 2005409. Muhammad Aslam. Manifest & Document Officer. Cell: +92 345 2005467. muhammad.aslam@aictpk.com. Maria Arif. Line Coordinator. Cell: +92 345 2005307. alerts@aictpk.com',
      inputs: [
        {
          type: 'text',
          value: 'Senior Contact Details: '
        },
        {
          type: 'text',
          value: 'Hussain Islam. Chief Executive Officer',
        },
        {
          type: 'text',
          value: 'Qamar ul Haq. Chief Financial Officer.qamar.ulhaq@aictpk.com'
        },
        {
          type: 'text',
          value: 'Cyrus Kanga. Executive Director Projects. cyrus.kanga@aictpk.com'
        },
        {
          type: 'text',
          value: 'Col. Shahzada Farrukh. Executive Director. shahzada.farrukh@aictpk.com'
        }

      ],
      buttons: ['OK']
    });
    await alert.present();
  }

}

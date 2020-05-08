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

  async openPKSH() {
    const alert = await this.alert.create({
      header: 'PAK SHAHEEN',
      inputs: [
        {
          type: 'text',
          value: 'CFS KARACHI'
        },
        {
          type: 'textarea',
          // tslint:disable-next-line: max-line-length
          value: '24-28 Reclaimed Area, Timber  Pond, Pak Shaheen. Avenue, Keamari, Town Karachi – Pakistan. Email: info@pscs-psg.com. Tel: (+92-21)32851800-5. Facsimile: (+92-21) 3285190. UAN : (+92-21) 111-725-742'
        },
        {
          type: 'text',
          value: 'Empty Container Park JSY: '
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          value: 'Plot no 12-13-14-15 Jungle Shah Empty Depot, Keamari, Town Karachi – Pakistan. Email: info@pscs-psg.com. Tel: (+92-21)32851800-5. Facsimile: (+92-21) 3285190',
        },
        {
          type: 'text',
          value: 'CFS -Port Qasim'
        },
        {
          type: 'text',
          // tslint:disable-next-line: max-line-length
          value: 'B-1,N.W.I.Z,CFS village, port Muhammad Bin Qasim, Karachi – Pakistan. Email: info@pscs-psg.com. Tel: (+92-21) 34720220-1  (+92-21)37420230-3. Facsimile : (+92-21)34720228'
        }
      ],
      buttons: ['OK']
    });
    await alert.present();
  }

}

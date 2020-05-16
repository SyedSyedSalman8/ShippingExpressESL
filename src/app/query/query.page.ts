import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Router } from '@angular/router';
import { Query } from '../_models/query';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController, Platform, NavController } from '@ionic/angular';
import { AlertifyService } from '../api/alertify.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  queryForm: FormGroup;
  query: Query;
  subscription: any;
  constructor(private service: ServiceService, private router: Router,
              public toast: ToastController, private alertify: AlertifyService,
              private platform: Platform, private navCtrl: NavController) { }

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
    this.queryForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      org: new FormControl(),
      sub: new FormControl(),
      msg: new FormControl('', Validators.required)
    });
  }

  newQuery() {
    if (this.queryForm.valid) { 
      this.query = Object.assign({}, this.queryForm.value);
      console.log(this.query);
      this.query.debug = false;
      this.service.newQuery(this.query).subscribe(data => {
       console.log('Message Saved Successfully');
       this.alertify.success('Query Sent Successfully');
      }, error => {
        this.alertify.error(error);
        console.log('Message Not Saved Successfully');
      }, () => {
          this.router.navigate(['/dashboard']);
      });
 } else {
  this.alertify.error('Please fill all required fields');
}
 }

  }



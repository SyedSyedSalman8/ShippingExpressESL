import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Router } from '@angular/router';
import { Query } from '../_models/query';
import { FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AlertifyService } from '../api/alertify.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  query: Query;
  registerForm: FormGroup;
  constructor(private service: ServiceService, private router: Router,
              public toast: ToastController, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  newQuery() {

      this.service.newQuery(this.query).subscribe(() => {
       console.log('Message Saved Successfully');
       this.alertify.success('Query Sent Successfully');
      }, error => {
        this.alertify.error(error);
        console.log('Message Not Saved Successfully');
      }, () => {
          this.router.navigate(['/dashboard']);
      });
 }
  }



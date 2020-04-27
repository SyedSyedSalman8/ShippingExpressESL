import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Router } from '@angular/router';
import { Query } from '../_models/query';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AlertifyService } from '../api/alertify.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  queryForm: FormGroup;
  query: Query;
  constructor(private service: ServiceService, private router: Router,
              public toast: ToastController, private alertify: AlertifyService) { }

  ngOnInit() {
    this.queryForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      org: new FormControl(),
      sub: new FormControl(),
      message: new FormControl()
    });
  }

  newQuery() {
      this.query = Object.assign({}, this.queryForm.value);
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



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/api/service.service';
import { AlertifyService } from 'src/app/api/alertify.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  bldata: any;


  constructor(private route: ActivatedRoute,
              private service: ServiceService, private router: Router, private alertify: AlertifyService) { 
this.route.queryParams.subscribe(params => {
if (this.router.getCurrentNavigation().extras.state) {
this.bldata = this.router.getCurrentNavigation().extras.state.t1;
}
});
 }

  ngOnInit() {
  }

  goToTracking() {
    return this.bldata.trackinginfo.url;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/api/alertify.service';
import { ServiceService } from 'src/app/api/service.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  value1: any;
  value2: any;
  value3: any;
  val = 0;
  val1: string;
  constructor(private route: ActivatedRoute,
              private service: ServiceService, private router: Router, private alertify: AlertifyService) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.value1 = this.router.getCurrentNavigation().extras.state.t1;
        this.value2 = this.router.getCurrentNavigation().extras.state.t2;
        // this.value3 = this.router.getCurrentNavigation().extras.state.d1;
      }
    });
    console.log(this.value1 + ' value of 1');
  } 

  ngOnInit() {
    this.service.getContainerRates().subscribe((data: (any)) => this.value3 = data);
  }

}

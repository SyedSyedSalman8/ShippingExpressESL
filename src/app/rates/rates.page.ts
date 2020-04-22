import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  data: any;
  data1: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getPolPod().subscribe((data: (any)) => this.data = data);
  }

  getContainerRates() {
    this.service.getContainerRates().subscribe(data => this.data1 = data);
  }

}

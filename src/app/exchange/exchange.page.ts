import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  data: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getExchangeRates().subscribe((data: (any)) => this.data = data);
  }



}

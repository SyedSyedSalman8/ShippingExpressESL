import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../api/alertify.service';
import { ServiceService } from '../api/service.service';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private alertify: AlertifyService,
              private linkify: NgxLinkifyjsModule, private service: ServiceService) { }

  ngOnInit() {
      this.service.getNews().subscribe(data => {
      this.data = data;
    });
  }


}

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  showSplash = true;
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'clipboard'
    },
    {
      title: 'Query',
      url: '/query',
      icon: 'help'
    },
    {
      title: 'Advisory',
      url: '/news',
      icon: 'newspaper'
    },
    {
      title: 'Exchange Rates',
      url: '/exchange',
      icon: 'cash'
    },
    {
      title: 'Rates',
      url: '/rates',
      icon: 'pulse'
    },
    {
      title: 'Booking',
      url: '/booking',
      icon: 'reader'
    },
    {
      title: 'Tracking',
      url: '/tracking',
      icon: 'analytics'
    },
    {
      title: 'Tools',
      url: '/home',
      icon: 'build'
    },
    {
      title: 'Vessel Info',
      url: '/vessel',
      icon: 'information-circle'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false); // <-- hide animation after 3s

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}

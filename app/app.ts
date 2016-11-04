import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Maps } from './pages/maps/maps';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Page2 } from './pages/page2/page2';
import { Signup } from './pages/signup/signup';
import { SignupShopper } from './pages/signupShopper/signupShopper';
import { SignupStoreOwner } from './pages/signupStoreOwner/signupStoreOwner';
import { SavedSearches } from './pages/savedSearches/savedSearches';



@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page2;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Maps', component: Maps },
      { title: 'Profile', component: Page2 },
      { title: 'Searches', component: SavedSearches }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);

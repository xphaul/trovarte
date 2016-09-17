import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})

export class Dashboard {

  constructor(public navCtrl: NavController) {

  }

}

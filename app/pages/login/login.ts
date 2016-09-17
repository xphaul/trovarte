import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'build/pages/login/login.html'
})

export class Login {

  constructor(public navCtrl: NavController) {

  }

}

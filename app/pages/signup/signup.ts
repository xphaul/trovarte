import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'build/pages/signup/signup.html'
})

export class Signup {

  constructor(public navCtrl: NavController) {

  }

}

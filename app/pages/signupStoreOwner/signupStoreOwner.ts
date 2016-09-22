import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'build/pages/signupStoreOwner/signupStoreOwner.html'
})

export class SignupStoreOwner {

  constructor(public navCtrl: NavController) {

  }

}

import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { DatePicker } from 'ionic-native';


declare var google;

@Component({
  templateUrl: 'build/pages/signupShopper/signupShopper.html'
})

export class SignupShopper {

  constructor(public navCtrl: NavController) {

  }

}

DatePicker.show({
  date: new Date(),
  mode: 'date'
}).then(
  date => console.log('Got date: ', date),
  err => console.log('Error occurred while getting date: ', err)
);

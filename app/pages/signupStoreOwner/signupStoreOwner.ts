import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { AlertController } from 'ionic-angular';

declare var google;

@Component({
  templateUrl: 'build/pages/signupStoreOwner/signupStoreOwner.html'
})

export class SignupStoreOwner {

  constructor(public alertCtrl: AlertController) {
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Sign Up to Trovarte?',
      message: 'By clicking on Sign Up, you agree to our Collecting of Personal Information Policy',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

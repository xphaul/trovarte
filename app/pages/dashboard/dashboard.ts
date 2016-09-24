import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { Login } from '../login/login';


@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})

export class Dashboard {
	mySlideOptions = {
    initialSlide: 1,
    loop: true, 
    autoplay: 2000
  };

  constructor(public navCtrl: NavController) {

  }
 	goToLogIn(){
  		this.navCtrl.push(Login)
  	}
}

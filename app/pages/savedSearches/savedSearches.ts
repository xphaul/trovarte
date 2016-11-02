import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

declare var google;

@Component({
  templateUrl: 'build/pages/savedSearches/savedSearches.html'
})

export class SavedSearches {

  constructor(public navCtrl: NavController) {

  }

}

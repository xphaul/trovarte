import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class Authentication {

  public authData: any;


  constructor(private http: Http, public auth: FirebaseAuth) {}

  signUp(credentials): any {
    return new Promise((resolve, reject) => {
      this.auth.createUser(credentials)
      .then((authData) => {

        this.authData = authData;
        resolve(this.authData);

      })
      .catch((error) => {
        reject(error);
      });
    });
  }

}

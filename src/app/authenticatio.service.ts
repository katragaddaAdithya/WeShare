import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
 import { Observable } from 'rxjs';
 import * as firebase from 'firebase/app';

 

@Injectable({
  providedIn: 'root'
})
export class AuthenticatioService {
  //userData!: Observable<firebase.User>;
  userData!: any;
  login!:string;
  register!: string;
  error!:string;
 

  constructor(private angularFireAuth: AngularFireAuth)
   
   { this.userData = angularFireAuth.authState;}

    /* Sign up */

 SignUp(email: string, password: string) {
 
this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
  console.log('You are Successfully signed up!', res); this.register = 't'; 
  })
  .catch(error => { 
  console.log('Something is wrong:' , error.message); this.error = error.message; this.register = 'f';
  } );

  }

 
  
  /* Sign in */
  SignIn(email: string, password: string) {
  
  this.angularFireAuth
  .signInWithEmailAndPassword(email, password)
  .then(res => {this.login='t';
  console.log('You are in!' + this.login); this.login='t';
  })
  .catch(err => {
  console.log('Something went wrong:',err.message); //this.error = err.message;
  });

  }
  
  /* Sign out */
  SignOut() {
  this.angularFireAuth
  .signOut();
  }
}

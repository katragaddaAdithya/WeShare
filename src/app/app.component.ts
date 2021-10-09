import { Component } from '@angular/core';
import { AuthenticatioService } from './authenticatio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weshare';
  msg =''
  displayapp = 'div_no_Display';
  displaylogin = '';
  isShow = false;

  constructor(
    private authenticationService:AuthenticatioService
    ){
    }

    email!: string;
    password!: string;
  
    signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    this.msg = 'Successfully signed up, please login';
    }
    
    signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    this.displayapp = '';
    this.displaylogin = 'div_no_Display';

    }
    
    signOut() {
    this.authenticationService.SignOut();
    }
}

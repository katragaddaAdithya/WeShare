import { Component, OnInit } from '@angular/core';
import {AuthenticatioService} from 'src/app/authenticatio.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
public display = 'div_no_Display';
public displayonupdate = 'div_no_Display';
public displayaddsub = 'div_no_Display';
public updatebutton = '';
public Display_login = true;
public register_page = false;
msg = '';
  displayapp = 'div_no_Display';
  displaylogin = '';
 updatedis='';
 deletesub = 'div_no_Display';
 stepback='div_no_Display';
   adminemail =''; 
  userData!: any;
  constructor(public authenticationService:AuthenticatioService,
    public au:AngularFireAuth,
    public firestore:AngularFirestore,
    public service:EmployeeService,
    public toastr:ToastrService,private location: Location) {
      this.userData = au.authState;
  //  this.msg=this.authenticationService.error;
   }

  onclick(){
    console.error("subj-info");
    this.display = '';
    this.displayonupdate = 'div_no_Display';
    this.displayaddsub ='div_no_Display';
    this.updatebutton ='div_no_Display';
    if(this.adminemail == 'admin@gmail.com'){
    this.deletesub = '';
   }
   this.updatedis = '';
   //this.stepback = '';
  }
  onclickupdate(){
    this.displayonupdate = '';
  }
  onclickbackpage(){
    this.location.back()
  }
  onclicaddsubject()
  {
    this.service.formData = {
      id: '',
      subject_name: '',
      subjet_notes: '',
      subject_info: '',
    };
this.displayaddsub ='';
this.updatedis ='div_no_Display'
this.display = 'div_no_Display';
this.displayonupdate = 'div_no_Display';
this.updatebutton ='div_no_Display';

  }

  Refresh()
  { 
    // this.Display_login=true;
    // this.adminemail='';
    // this.updatedis = 'div_no_Display';
    location.reload();
     }

     onDelete(id: string) {
      if (confirm("Are you sure to delete this record?")) {
        this.firestore.doc('employees/' + id).delete();
        //this.resetForm();
        this.service.formData = {
          id: '',
          subject_name: '',
          subjet_notes: '',
          subject_info: '',
        };
        this.toastr.warning('Deleted successfully');
      }
    }

  ngOnInit(): void {
   
  }


  email!: string;
    password!: string;
    confirm_password!:string;

  
  /*  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.adminemail = this.email;
    this.email = '';
    this.password = '';
   this.msg = this.authenticationService.error + this.authenticationService.register + this.adminemail;
    
    
    }*/

    signUp() {
      this.Display_login=false;
      this.msg = '';
      if(this.password === this.confirm_password){
     this.au.createUserWithEmailAndPassword(this.email, this.password).then(res => {
      console.log('You are Successfully signed up!', res); this.msg = 'You are Successfully signed up! click here to go back' ;
     // this.adminemail=this.email;
      })
      .catch(error => { 
      console.log('Something is wrong:' , error.message); this.msg = error.message;
      } ); } else {
        console.log('You are not Successfully signed up!');
        this.msg = 'password and confirm password was not same click here to go back';
      }
      this.register_page = false;
      }

      register(){
        this.register_page = true;
      }
      backtopage(){
        this.Display_login = true;
        this.msg='';
        this.email = '';
        this.password = '';
        this.confirm_password='';
      }


    /*signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    this.msg = this.authenticationService.error
    if(this.authenticationService.login == 't')
    {
      this.msg = '1';
    this.displayapp = '';
    this.displaylogin = 'div_no_Display';
    this.msg = '2';
    }
   else 
    {
      this.msg = 'Something is wrong:'+ this.authenticationService.error;
      ;
    } 
    }*/
    

    signIn() {
      this.Display_login=false;
  this.adminemail = this.email;
      this.au
      .signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
      console.log('You are in!', this.email ); this.displayapp = ''; this.displaylogin = 'div_no_Display'; console.log('user name is'+this.email);
    
      })
      .catch(err => {
      console.log('Something went wrong:',err.message); this.msg= 'Something went wrong:'+ err.message;
      });
      this.email = '';
      this.password = '';
      if (this.adminemail=='admin@gmail.com'){
      this.updatedis ='';}
      }
    
    signOut() {
    this.authenticationService.SignOut();
    }
}

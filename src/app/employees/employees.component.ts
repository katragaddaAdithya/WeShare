import { Component, OnInit } from '@angular/core';
import {AuthenticatioService} from 'src/app/authenticatio.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';


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
msg = '';
  displayapp = 'div_no_Display';
  displaylogin = '';
 updatedis='div_no_Display';
 deletesub = 'div_no_Display';
   adminemail =''; 
  userData!: any;
  constructor(public authenticationService:AuthenticatioService,
    public au:AngularFireAuth,
    public firestore:AngularFirestore,
    public service:EmployeeService,
    public toastr:ToastrService) {
      this.userData = au.authState;
  //  this.msg=this.authenticationService.error;
   }

  onclick(){
    this.display = '';
    this.displayonupdate = 'div_no_Display';
    this.displayaddsub ='div_no_Display';
    this.updatebutton ='div_no_Display';
    if(this.adminemail == 'admin@gmail.com'){
    this.deletesub = '';}
    this.updatedis = 'div_no_Display'
  }
  onclickupdate(){
    this.displayonupdate = '';

  
  }
  onclicaddsubject()
  {
this.displayaddsub ='';
this.updatedis ='div_no_Display'
  }

  Refresh()
  { 
    this.adminemail='';
    this.updatedis = 'div_no_Display';
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

  
  /*  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.adminemail = this.email;
    this.email = '';
    this.password = '';
   this.msg = this.authenticationService.error + this.authenticationService.register + this.adminemail;
    
    
    }*/

    signUp() {
      this.msg = '';
     this.au.createUserWithEmailAndPassword(this.email, this.password).then(res => {
      console.log('You are Successfully signed up!', res); this.msg = 'You are Successfully signed up!' ;
     // this.adminemail=this.email;
      })
      .catch(error => { 
      console.log('Something is wrong:' , error.message); this.msg = error.message;
      } );
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

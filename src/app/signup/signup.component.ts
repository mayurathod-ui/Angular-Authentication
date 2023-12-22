import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private _router: Router, private _http: HttpClient, private _toast: ToastService, private loginser : LoginServiceService) { }

  signup: FormGroup | any;
  signuser: any;

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl(''),
      'lname': new FormControl(''),
      'email': new FormControl(''),
      'password': new FormControl('')
    });
  }

  signupdata(signup: any) {
    this.loginser.createUser(signup).subscribe((res)=>{
        if(res != ""){
          alert("Recordv added!");
          this.signup.reset();
          this._router.navigate(['/login']);
        }else{
          alert("some error!")
        } 
    })

    // this.signuser = this.signup.value.fname;
    // this._http.post<any>("http://localhost:3000/Signup", this.signup.value)
    //   .subscribe(
    //     res => {
    //       this._toast.showSuccess(`User ${this.signuser} successfully registered!`);
    //       this.signup.reset();
    //       this._router.navigate(['/login']);
    //     },
    //     err => {
    //       console.error('Something went wrong during signup', err);
    //       this._toast.showError('Failed to register user. Please try again.');
    //       // You can also use alert('Failed to register user. Please try again.');
    //     }
    //   );
  }
}

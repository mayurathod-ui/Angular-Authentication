import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _http: HttpClient, private _toast: ToastService) { }

  login: FormGroup | any;

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(''), // Assuming email is the correct form control name
      'password': new FormControl('')
    });
  }

  logindata(login: FormGroup) {
    
    this._http.get<any>("http://localhost:3000/Signup")
      .subscribe(
        res => {
           
          const user = res.find((a: any) => {
            return a.fname === this.login.value.fname && a.password === this.login.value.password;
          });
          if (user) {
            
            alert('You are successfully logged in');
            this.login.reset();
            this._router.navigate(['/dashboard']);
          } else {
             
            alert('User Not Found');
            this._router.navigate(['/login']);
          }
        },
        err => {
          alert('Error occurred during login');
        }
      );
    
  }
  

}

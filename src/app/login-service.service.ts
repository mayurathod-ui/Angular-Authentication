import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http:HttpClient ) { }

  signUrl = "http://localhost:3000/Signup";

  createUser(res:any){
    return this.http.post(this.signUrl,res )
  }
  logingUser(res:any){
    return this.http.get(this.signUrl)
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
    private _url = "http://localhost:3000/authenticate";

    private users = [
        { email: 'admin@gmail.com', password: 'admin'},
        { email: 'user1@gmail.com', password: 'user1'}
    ]

    constructor(private _http: Http){
    }
    
    login(username, password){
        var authenticatedUser = this.users.find(u => u.email === username);
        if(authenticatedUser && authenticatedUser.password == password){
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            console.log(localStorage.getItem("user").email + " successfully authenticated" );
            return true;
        } 
        console.log("Bad login" );
        return false;
        // return this._http.post(this._url, JSON.stringify(username, password))
        //     .map( res => res.json());
    }
}
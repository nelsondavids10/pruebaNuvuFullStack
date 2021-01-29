import { Injectable } from '@angular/core';
import { Http } from '../shared/http-client/http-client';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login(request): Promise<any> {
    return this.http.post('login', request).catch(error => {return this.http.catch(error)});
  }

  validateEmail(request) {
    return this.http.post('user/validate/mail', request).catch(error => this.http.catch(error));
  }

  validateIdentification(request) {
    return this.http.post('user/validate/identification', request).catch(error => this.http.catch(error));
  }

  logOut(email) {
    return this.http.post('logoff', {email: email}).catch(error => this.http.catch(error));
  }

  changePassword(request) {
    return this.http.post('user/changepassword/', request).catch(error => this.http.catch(error));
  }

}

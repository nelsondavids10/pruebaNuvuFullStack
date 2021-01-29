import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class Http {

	public base;

	constructor(private http: HttpClient, private router: Router) {
		this.base = environment.api_base;
	}

	private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Accept': 'application/json;',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  createUrlFromRoot(relativeUrl): string {
    return this.base + relativeUrl;
  }

  get<T>(url: string): Promise<any> {
    return this.http.get<T>(this.createUrlFromRoot(url), { headers: this.getHeaders() }).toPromise();
  }

  post(url: string, request?: any): Promise<any> {
    return this.http.post(this.createUrlFromRoot(url), JSON.stringify(request), { headers: this.getHeaders() }).toPromise();
  }

  put(url: string, request: any): Promise<any> {
    return this.http.put(this.createUrlFromRoot(url), JSON.stringify(request), { headers: this.getHeaders() }).toPromise();
  }

  patch(url: string, request: any): Promise<any> {
    return this.http.patch(this.createUrlFromRoot(url), request, { headers: this.getHeaders() }).toPromise();
  }

  delete(url: string, request?: any): Promise<any> {
    return this.http.delete(this.createUrlFromRoot(url), { headers: this.getHeaders() }).toPromise();
  }

  catch(error: HttpErrorResponse) {
    console.log(error)
   if (error.status) {
      if (error.status === 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
        return null;
      } else if (error.status === 403) {
        return 403;
      }
      else if (error.status === 500) {
          // alert(error.error.message);
      } else {
          // alert(error.message);
      }

  } else {
      // alert('systemDown');
  }


  const customError = {
      message: error.error,
      status: error.status,
      sessionExpired: error.status === 412
  };

  return ;
  }

}
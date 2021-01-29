import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { slideToRight } from '../../shared/animate/router.animations';
import { ServicePragmaticService } from 'src/app/service/service-pragmatic.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
  animations: [slideToRight()]
})

export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    userId: ['', Validators.compose([Validators.required])],
    password: ['', Validators.required],
    rememberme: [true, Validators.required]
  });
  public hide = true;
  public notification = false;
  public rememberPassword = false;
  public confirmIdentification = false;
  Lista: any = [];
  ValidaUsuario: number;

  constructor(public servicePragmatic: ServicePragmaticService,
    private fb: FormBuilder,
    public router: Router,
  ) {
    this.ValidaUsuario = 0;
  }

  ngOnInit() {

  }

  async login() {
    debugger;
    if (this.loginForm.valid) {
      if (this.loginForm.controls.userId.value == 'admin') {
        if (this.loginForm.controls.password.value == '1234567890') {
          this.ValidaUsuario = 1;
          localStorage.setItem('user', 'admin');
          localStorage.setItem('token', '1234567890');
          return this.router.navigate(['/']);
        }
      }

      if (this.ValidaUsuario === 0) {
        this.ValidaUsuario = 2; // ERROR DE LOGIN
      }

    }
  }

}

import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicePragmaticService } from '../service/service-pragmatic.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LayoutComponent implements OnInit {

  options: FormGroup;
  collapsed: boolean = false;
  viewCenterNotications: boolean = false;
  viewNews: boolean = false;

  constructor(fb: FormBuilder, private loginService: LoginService, public router: Router) {

    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  active = false
  user;
  providerList: any = [];

  // constructor(public dialog: MatDialog ,private loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.user = (localStorage.getItem('user'));
    var user = (localStorage.getItem('user'));
    this.nameUser = user;
  }

  async wathcihgNotificationsNews() {
  }


  collapedSideBar: boolean;
  @Output() eventG = new EventEmitter();
  public loading = false;
  public viewNotification: boolean = false;
  public titleNotification: string = "";
  public messageNotification: string = "";
  nameUser: string;


  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  // showLoading(show: boolean) {
  //     this.eventG.emit(show);
  // }

  ngAfterViewInit() {

  }

  featureHide() {
    this.viewNotification = false;
  }

  toggleSideBar() {
    this.active = !this.active
  }

  logOut() {


    localStorage.clear();
    return this.router.navigate(['/login']);

  }

  verNotificacion() {
    this.viewCenterNotications = !this.viewCenterNotications;
    this.viewNews = false;
  }


}

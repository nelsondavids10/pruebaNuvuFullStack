import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    DashboardComponent

  ],
  exports: [
    DashboardComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    // LayoutRoutingModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [
    DatePipe,
  ]
})
export class DashboardModule { }

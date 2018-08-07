/*
  This file is automatically generated. Any changes will be overwritten.
  Modify employee-territories.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';
import { AddEmployeeTerritoryComponent } from '../add-employee-territory/add-employee-territory.component';
import { EditEmployeeTerritoryComponent } from '../edit-employee-territory/edit-employee-territory.component';

import { NorthwindService } from '../northwind.service';
import { SecurityService } from '../security.service';

export class EmployeeTerritoriesGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  _location: Location;

  _subscription: Subscription;

  northwind: NorthwindService;

  security: SecurityService;

  getEmployeeTerritoriesResult: any;

  getEmployeeTerritoriesCount: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.northwind = this.injector.get(NorthwindService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.northwind.getEmployeeTerritories(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, `Employee,Territory`, this.grid0.allowPaging)
    .subscribe((result: any) => {
      this.getEmployeeTerritoriesResult = result.value;

      this.getEmployeeTerritoriesCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.northwind.getEmployeeTerritories(`${event.filter}`, event.top, event.skip, `${event.orderby}`, `Employee,Territory`, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getEmployeeTerritoriesResult = result.value;

      this.getEmployeeTerritoriesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Delete(event: any) {
    this.northwind.deleteEmployeeTerritory(event.EmployeeID, `${event.TerritoryID}`)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `EmployeeTerritory deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete EmployeeTerritory` });
    });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddEmployeeTerritoryComponent, { parameters: {}, title: 'Add Employee Territory' });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditEmployeeTerritoryComponent, { parameters: {EmployeeID: event.EmployeeID, TerritoryID: event.TerritoryID}, title: 'Edit Employee Territory' });
  }
}

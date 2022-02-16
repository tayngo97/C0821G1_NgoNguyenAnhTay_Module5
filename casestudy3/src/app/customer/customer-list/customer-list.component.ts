import {Component, OnInit, ViewChild} from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerTextComponent} from '../customer-text/customer-text.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // customers: Customer[];

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  customers: Customer[] = [];

  totalLength: any;
  page = 1;



  ngOnInit(): void {
    this.getAll();

  }

  openDialog(customer: any) {
     this.dialog.open(CustomerTextComponent, {data: customer, width : '30%'}).afterClosed().subscribe((value => {
      if (value === 'delete') {
        this.getAll();
      }
    }));
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      console.log(this.totalLength = customers.length);
    });
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Customer[] = [];
    for (const customer of this.customers) {
      if (customer.hoTen.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || customer.ngaySinh.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || customer.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || customer.gioiTinh.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(customer);
      }
    }
    this.customers = results;
    if (results.length === 0 || !key) {
      this.getAll();
    }
  }



}

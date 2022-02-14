import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/ng-service/customer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  displayedColumns: string[] = ['id', 'hoTen', 'ngaySinh', 'gioiTinh',
  'soCMND','soDienThoai','email','loaiKhach','diaChi'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService) { 
    
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
   this.customers = this.customerService.getAll();

   this.dataSource = new MatTableDataSource(this.customers);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

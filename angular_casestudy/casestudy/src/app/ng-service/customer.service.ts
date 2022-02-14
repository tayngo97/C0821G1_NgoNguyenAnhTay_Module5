import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {
      id: 1,
      hoTen: 'Tay Ngo',
      ngaySinh: '1997', 
      gioiTinh: 'Nam', 
      soCMND: '20101022', 
      soDienThoai: '0905231231',
      email: "tay@gmail.com",
      loaiKhach: 'Vip', 
      diaChi: 'Tam ky'
    },
    {
      id: 2,
      hoTen: 'Ly Tran',
      ngaySinh: '1997', 
      gioiTinh: 'Nam', 
      soCMND: '20101022', 
      soDienThoai: '0905231231',
      email: "tay@gmail.com",
      loaiKhach: 'Vip', 
      diaChi: 'Tam ky'
    },
    {
      id: 3,
      hoTen: 'Hoa Nguyen',
      ngaySinh: '1997', 
      gioiTinh: 'Nam', 
      soCMND: '20101022', 
      soDienThoai: '0905231231',
      email: "tay@gmail.com",
      loaiKhach: 'Vip', 
      diaChi: 'Tam ky'
    },
    {
      id: 4,
      hoTen: 'Dat Banh',
      ngaySinh: '1997', 
      gioiTinh: 'Nam', 
      soCMND: '20101022', 
      soDienThoai: '0905231231',
      email: "tay@gmail.com",
      loaiKhach: 'Vip', 
      diaChi: 'Tam ky'
    },
  

  ];

  constructor() { 

  }

  getAll() {
    return this.customers;
  }

  saveCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: number , customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer(id: number ) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}

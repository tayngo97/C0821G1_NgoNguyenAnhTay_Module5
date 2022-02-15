import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm : FormGroup = this.fb.group({
    id : 0, 
    hoTen:['',[Validators.required]],
    ngaySinh: '',
    gioiTinh: '',
    soCMND: '',
    soDienThoai: '',
    email: ['',[Validators.required, Validators.email]],
    loaiKhach: '',
    diaChi: '',
})
  constructor(private fb : FormBuilder,
              private customerService : CustomerService,
              private router : Router) { }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    customer.id = parseInt(customer.id);
    this.customerService.saveCustomer(customer).subscribe(()=> {
      this.customerForm.reset();
      alert('Thêm mới thành công');
      this.router.navigate(['customer/list']);
    }, err=>{
        console.log(err);
    })
  }

}

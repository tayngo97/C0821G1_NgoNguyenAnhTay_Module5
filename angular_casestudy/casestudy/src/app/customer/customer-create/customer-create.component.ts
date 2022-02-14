import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/ng-service/customer.service';



@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {



  customerForm : FormGroup = this.fb.group({
      id : '', 
      hoTen:['',[Validators.required]],
      ngaySinh: '',
      gioiTinh: '',
      soCMND: '',
      soDienThoai: '',
      email: ['',[Validators.required, Validators.email]],
      loaiKhach: '',
      diaChi: '',
  })

  states: string[] = [
    'Member',
    'Silver',
    'Gold',
    'Platinum',
    'Vip',
  ];

  constructor(private fb : FormBuilder,private customerService : CustomerService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    alert('Thêm mới thành công');
    // this.customerForm.reset();
    this.router.navigate(['customer/list']);
  }

  

 

}

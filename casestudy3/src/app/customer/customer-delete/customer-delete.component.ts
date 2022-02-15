import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from 'src/app/service/customer.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm = this.fb.group({
        // id: customer.id,
        // hoTen: customer.hoTen,
        // ngaySinh: customer.ngaySinh,
        // gioiTinh: customer.gioiTinh
        id: customer.id,
        hoTen: customer.hoTen ,
        ngaySinh: customer.ngaySinh,
        gioiTinh: customer.gioiTinh
      });
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.router.navigate(['customer/list']);
    }, err => {
      console.log(err);
    });
  }


}

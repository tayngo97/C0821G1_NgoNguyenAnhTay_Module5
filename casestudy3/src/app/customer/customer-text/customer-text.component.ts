import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-text',
  templateUrl: './customer-text.component.html',
  styleUrls: ['./customer-text.component.css']
})
export class CustomerTextComponent implements OnInit {

  customerForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private router: Router,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<CustomerTextComponent>,
             ) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      id : 0,
      hoTen: '',
      ngaySinh: '',
      gioiTinh: '',
      soCMND: '',
      soDienThoai: '',
      email: '',
      loaiKhach: '',
      diaChi: '',
    });
    if (this.data) {
      this.customerForm.controls.id.setValue(this.data.id);
      this.customerForm.controls.hoTen.setValue(this.data.hoTen);
      this.customerForm.controls.ngaySinh.setValue(this.data.ngaySinh);
      this.customerForm.controls.gioiTinh.setValue(this.data.gioiTinh);
    }
  }


  deleteCustomer(id: number) {
    console.log(id);
    this.customerService.deleteCustomer(id).subscribe(() => {
      alert('Deleted!');
      this.router.navigate(['customer/list']);
      this.dialogRef.close('delete');
    }, err => {
      console.log(err);
    });
  }
}

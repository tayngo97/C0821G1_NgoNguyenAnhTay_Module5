import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from 'src/app/service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = this.fb.group({
    id: 0,
    hoTen: ['', [Validators.required]],
    maKh: ['',[Validators.pattern('^[K][H]-[\\d]{4}$'), Validators.required]],
    ngaySinh: ['',[Validators.required]],
    gioiTinh: '',
    soCMND: '',
    soDienThoai: ['',[Validators.required, Validators.pattern('^([0][9][0|1][\\d]{7})$')]],
    email: ['', [Validators.required, Validators.email]],
    loaiKhach: '',
    diaChi: '',
  });

  customerType: CustomerType[];

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(c => {
      this.customerType = c;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {

  }


  submit() {
    const customer = this.customerForm.value;
    customer.id = parseInt(customer.id);
    console.log(customer.ngaySinh);
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.customerForm.reset();
      alert('Thêm mới thành công');
      this.router.navigate(['customer/list']);
    }, err => {
      console.log(err);
    });
  }

}

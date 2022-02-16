import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm : FormGroup ;
  id : number ;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
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
        id: customer.id,
        hoTen: customer.hoTen,
        maKh: customer.maKh,
        ngaySinh : customer.ngaySinh,
        gioiTinh : customer.gioiTinh,
        soCMND : customer.soCMND,
        soDienThoai : customer.soDienThoai,
        email : customer.email,
        loaiKhach: customer.loaiKhach,
        diaChi : customer.diaChi
      });
    });
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['customer/list'])
    }, e => {
      console.log(e);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/ng-service/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customerForm !: FormGroup;
  id !: number ;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
                   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
                      // @ts-ignore
                     this.id = +paramMap.get('id');
                     const customer = this.customerService.findById(this.id);
                     this.customerForm = this.fb.group({
                      // @ts-ignore
                       id : customer.id ,
                      // @ts-ignore
                       hoTen : customer.hoTen,
                       // @ts-ignore
                       ngaySinh : customer.ngaySinh,
                       // @ts-ignore
                       gioiTinh : customer.gioiTinh,
                       // @ts-ignore
                       soCMND : customer.soCMND,
                     })
                   });
               }

  ngOnInit(): void {
  }

  public deleteCustomer(id:number){
    this.customerService.deleteCustomer(id);
    this.router.navigate(['customer/list']);
  }

}

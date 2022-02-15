import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';




@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customerr: Customer;
  id: number;
  constructor(private customerService: CustomerService,
              ) { }

  ngOnInit(): void {
    this.getAll();
  }



  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer);
      this.customerr = customer;
    }, error => {
      console.log(error);
    });
  }
}

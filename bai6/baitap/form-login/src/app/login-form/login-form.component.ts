import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  
  onSubmit() {
    console.log(this.userForm.value);
  }
}

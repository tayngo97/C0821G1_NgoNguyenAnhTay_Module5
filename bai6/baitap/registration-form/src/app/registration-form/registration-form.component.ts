import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';

export function confirmPassword(c : AbstractControl){
  const v = c.value;
  return(v.password === v.passwordCf) ? null : {passwordnotmatch : true};
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuider : FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGr: this.formBuider.group({
          password : ['',[Validators.required,Validators.minLength(6)]],
          passwordCf : ['',[Validators.required]]
      },{
        validator : confirmPassword
      }),
      country:['',[Validators.required]],
      age: ['',[Validators.required,Validators.min(18)]],
      gender: ['',[Validators.required]],
      phone:['',[Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}

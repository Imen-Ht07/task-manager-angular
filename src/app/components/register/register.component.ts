import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  user!: User;
  
  
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
  constructor(public formBuilder: FormBuilder, private UserService: UserService) {
    this.registerForm= this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[A-Za-z]+([\\ A-Za-z]+)*")]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],

      })
   }

  get f() { return this.registerForm.controls; }  
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
  
    this.UserService.register(this.registerForm.value)        
    .subscribe(
      res => {             
        localStorage.setItem('token', res.token);   
      },
      err => {
        console.log(err);
        this.submitted = false;
      }
    )

  }
}

// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  user: User | undefined;
  submitted = false;
  loginError = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Login form submission
  onSubmit() {
    this.submitted = true;
    this.userService.login(this.loginForm.value).subscribe(
      res => {             
        localStorage.setItem('token', res.token);     
      },
      err => console.log(err)
    )

  }
  // Getter for easier access to form fields
  get f() {
    return this.loginForm.controls;
  }
}

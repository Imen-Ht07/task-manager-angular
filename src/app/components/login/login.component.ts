// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Login form submission
  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }

  // Getter for easier access to form fields
  get f() {
    return this.loginForm.controls;
  }
}

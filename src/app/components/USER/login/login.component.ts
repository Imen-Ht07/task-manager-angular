import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.loginError = 'Erreur de connexion, veuillez vérifier vos identifiants.';
        console.log(err);
      }
    );
  }

  get f() {
    return this.loginForm.controls;
  }
}

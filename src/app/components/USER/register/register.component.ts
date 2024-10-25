import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'; // Importer Router

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
  loginError = ''; 
  emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";

  constructor(public formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[A-Za-z]+([\\ A-Za-z]+)*")]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.passwordMatchValidator }); // Ajouter la validation de correspondance des mots de passe
  }

  get f() { return this.registerForm.controls; }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('passwordConfirm')?.value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true; // Indiquer que le chargement a commencé

    this.userService.register(this.registerForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']); // Rediriger après une inscription réussie
      },
      err => {
        console.log(err);
        this.loginError = 'Erreur lors de l\'inscription, veuillez réessayer.'; // Afficher un message d'erreur
        this.submitted = false;
        this.loading = false; // Stopper le chargement
      }
    );
  }
}

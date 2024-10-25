import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/USER/login/login.component';
import { RegisterComponent } from './components/USER/register/register.component';
import { UserAddComponent } from './components/USER/user-add/user-add.component';
import { UserProfileComponent } from './components/PROFILE/user-profile/user-profile.component';
import { UserListComponent } from './components/USER/user-list/user-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPswComponent } from './components/PROFILE/forgot-psw/forgot-psw.component';
import { UserProfileEditComponent } from './components/PROFILE/user-profile-edit/user-profile-edit.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgotpsw', component: ForgotPswComponent },
  { path: 'user-profile-edit', component: UserProfileEditComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

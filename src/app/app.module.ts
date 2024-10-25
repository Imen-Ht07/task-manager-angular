import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ErrorInterceptor } from './interceptors/error.interceptor'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/USER/login/login.component';
import { RegisterComponent } from './components/USER/register/register.component';
import { UserAddComponent } from './components/USER/user-add/user-add.component';
import { UserProfileComponent } from './components/PROFILE/user-profile/user-profile.component';
import { UserListComponent } from './components/USER/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPswComponent } from './components/PROFILE/forgot-psw/forgot-psw.component';
import { UserProfileEditComponent } from './components/PROFILE/user-profile-edit/user-profile-edit.component';
import { LogoutComponent } from './components/USER/logout/logout.component';
import { TasksListComponent } from './components/TASKS/tasks-list/tasks-list.component';
import { TasksFormComponent } from './components/TASKS/tasks-form/tasks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserAddComponent,
    UserProfileComponent,
    UserListComponent,
    FooterComponent,
    LoadingComponent,
    SideBarComponent,
    DashboardComponent,
    ForgotPswComponent,
    UserProfileEditComponent,
    LogoutComponent,
    TasksListComponent,
    TasksFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

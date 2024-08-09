import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { LoginUser, LoginService } from '../../login.service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [MatRegModule,ReactiveFormsModule,MatCheckboxModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
})
export class SignInFormComponent {
  user: LoginUser = {
    email: '',
    password: '',
    phoneNumber: '',
    userName: '',
  };
  loginForm: FormGroup;
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private LoginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  // RouterLink
  navigateToSignup() {
    this.router.navigate(['signUp']);
  }
  // PasswordeyeSwtich
  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  //onLogin
  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const isLoggedIn = this.LoginService.login(email, password);
      console.log('Login status:', isLoggedIn);
      if (isLoggedIn) {
        console.log('Login successful');
        this.router.navigate(['']);
      } else {
        this.errorMessage = 'Invalid email or password';
        console.log('Login failed');
      }
    } else {
      this.loginForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}

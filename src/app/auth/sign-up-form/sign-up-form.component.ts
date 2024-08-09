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
import { passwordMatchValidator } from './passwordMatchValidator';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [MatRegModule,ReactiveFormsModule,MatCheckboxModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  user: LoginUser = { userName: '', email: '', password: '', phoneNumber: '' };
  
  signupForm: FormGroup;

  signupError: string | null = null;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
  )
{
  this.signupForm = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(25)]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email, this.emailExistsValidator.bind(this)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  emailExistsValidator(control: any) {
    const email = control.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const emailExists = users.some((user: LoginUser) => user.email === email);
    return emailExists ? { emailExists: true } : null;
  }

  // routerLinkto Login
  navigateToLogin() {
    this.router.navigate(['signIn']);
  }
  // PasswordeyeSwtich
  isPasswordVisible = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  toggleConfirmPasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }



  //onsubmit
  SignupUser() {
    if (this.signupForm.valid) {
      const newUser: LoginUser = this.signupForm.value;
      const result = this.loginService.signup(newUser);
      if (result.startsWith('Error')) {
        this.signupError = result;
        console.error('Signup Error: Email already exists');
        alert('email already exists. Please use a different email.');
      } else {
        this.signupError = null;
        alert('account created successfully!');
        this.navigateToLogin();
      }
    }
  }
}


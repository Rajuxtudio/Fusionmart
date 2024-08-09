import { Component, Output, EventEmitter } from '@angular/core';
import { MatRegModule } from '../../mat-reg/mat-reg.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { LoginUser, LoginService } from '../../login.service';


@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, MatRegModule, MatMenuModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  searchQuery: string = '';

  user: LoginUser | null = null;

  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit():void {
    this.checkSession();
  }
  checkSession(): void {
    const session = localStorage.getItem('session');
    if (session) {
      this.user = JSON.parse(session);
    }
  }

  logout() {
    this.LoginService.logout();
    this.user = null;
    // Optionally, navigate to the login page or refresh the component
  }

  @Output() search = new EventEmitter<string>();
  enterSearchValue: string = '';
  onSearch(event: any) {
    this.search.emit(event.target.value);
  }
  clearSearch() {
    this.searchQuery = '';
  }
  goToHome() {
    this.router.navigate(['']);
  }
  login() {
    this.router.navigate(['signIn']);
  }

  signup() {
    this.router.navigate(['signUp']);
  }
}

import { Injectable } from '@angular/core';
import { user_Credentials } from './Entities/globalConstants';

export interface LoginUser {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {
    this.initializeUsers();
  }

  private initializeUsers(): void {
    var existing = localStorage.getItem('users');
    if (existing == null) {
      const users = JSON.stringify(user_Credentials);
      localStorage.setItem('users', users);
    }
  }
  signup(user: LoginUser): string {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: LoginUser[] = JSON.parse(storedUsers);
      const existingUser = users.find((u) => u.email === user.email);
      if (existingUser) {
        return 'Error: Email already exists';
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return 'User signed up successfully';
    }
    return 'Error: Unable to sign up user';
  }

  // Login user
  login(email: string, password: string): boolean {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: LoginUser[] = JSON.parse(storedUsers);
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        localStorage.setItem('session', JSON.stringify(user));
        return true;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('session') !== null;
  }

  logout(): void {
    localStorage.removeItem('session');
  }

  getUser(email: string): LoginUser | null {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: LoginUser[] = JSON.parse(storedUsers);
      return users.find((user) => user.email === email) || null;
    }
    return null;
  }
}

import { Injectable } from '@angular/core';
import { LogInData } from '../model/logInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: LogInData = new LogInData('user', 'test');
  private readonly mockAdmin: LogInData = new LogInData('admin', 'test');
  isAuthenticated = false;
  isAdmin = false;

  constructor() { }

  authenticate(logInData: LogInData): boolean {
    if (this.checkCredentials(logInData)) {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(logInData: LogInData): boolean {
    return this.checkLogin(logInData.user) && this.checkPassword(logInData.password);
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.user;
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.password;
  }

  logout() {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
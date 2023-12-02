import { Injectable } from '@angular/core';

const usersDatabase: UserData[] = [
  {
    login: 'Admin',
    password: '12345',
  },
  {
    login: 'Max',
    password: '1qaz',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static readonly FIELD_NAME = 'userData';

  public getUserData(): UserData | null {
    const data = localStorage.getItem(AuthService.FIELD_NAME);
    return data ? JSON.parse(data) : null;
  }

  public login(data: UserData): boolean {
    const userExists = usersDatabase.some(
      (item) => item.login === data.login && item.password === data.password,
    );

    if (userExists) {
      localStorage.setItem(AuthService.FIELD_NAME, JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  }

  public logout(): void {
    localStorage.removeItem(AuthService.FIELD_NAME);
  }

  public isLogged(): boolean {
    return this.getUserData() !== null;
  }
}

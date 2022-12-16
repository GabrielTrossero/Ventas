import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  ngOnInit() {}

  constructor(private apiAuth: ApiAuthService) {
    this.email = '';
    this.password = '';
  }

  login() {
    this.apiAuth.login(this.email, this.password).subscribe((response) => {
      console.log(response);
    });
  }
}

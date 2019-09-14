import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../backend-server/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  };
  alertsDismiss: any = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  onLogin() {
    if (this.user.username === ''
      || this.user.email === '') {
      this.addAlert('warning', `Por favor no dejes campos en blanco`);
      return;
    }

    this.http.post('/api/user/login', this.user).subscribe(res => {
      if (res['code'] !== 200) {
        this.addAlert('danger', `El usuario o la contraseña son incorrectos`);
      } else {
        this.router.navigate(['dashboard']);
      }
    })
  }

  addAlert(type, message) {
    this.alertsDismiss.push({
      type: type,
      msg: message,
      timeout: 5000,
      dismissible: true
    });
  }

}

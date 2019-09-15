import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../backend-server/models/User';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };
  alertsDismiss: any = [];
  viewOnLogin = "applications";

  constructor(
    private http: HttpClient,
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }


  ngOnInit() {
    this.currentUserService.getCurrentUser((user) => {
      if (user !== null) {
        this.router.navigate([this.viewOnLogin]);
      }
    })
  }

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
        this.currentUserService.createCurrentUser(res['user']);
        this.router.navigate([this.viewOnLogin]);
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

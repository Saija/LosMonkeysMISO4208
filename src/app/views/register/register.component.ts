import { Component, OnInit } from '@angular/core';
import { User } from '../../../../backend-server/models/User';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  user: User = {};
  repeat_password = '';
  alertsDismiss: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.clearData();
  }

  onRegister() {
    if (this.user.username === ''
      || this.user.email === ''
      || this.user.password === ''
      || this.repeat_password === '') {
      this.addAlert('warning', `Por favor no dejes campos en blanco`);
      return;
    }

    if (this.user.password !== this.repeat_password) {
      this.addAlert('info', `Las contraseñas no coinciden`);
      return;
    }

    this.http.post("/api/user", this.user).subscribe(res => {
      if (res['code'] === 200) {
        this.addAlert('success', `El usuario fue registrado exitosamente!`);
        this.clearData();
      } else {
        this.addAlert('danger', `Ocurrió un error al registrar el usuario. ${res['message']}`);
      }
    })

  }

  clearData() {
    this.user = {
      username: '',
      email: '',
      password: ''
    };
    this.repeat_password = '';
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

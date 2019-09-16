import { Component, OnInit } from '@angular/core';
import { ApplicationModel, User } from '../../../../../backend-server/models';
import { CurrentUserService } from '../../../services/current-user.service';
import { ApplicationsService } from '../../../services/applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss']
})
export class NewApplicationComponent implements OnInit {

  newApp: ApplicationModel = {};
  user: User = {};
  alertsDismiss: any = [];

  constructor(
    private currentUserService: CurrentUserService,
    private applicationsService: ApplicationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUserService.getCurrentUser((user) => {
      if (user === null) {
        return;
      }
      this.user = user;
      this.initializeApp();
    })
  }

  initializeApp(): void {
    this.newApp = {
      type: "mobile",
      name: "",
      description: "",
      bundle_id: "",
      so: "",
      url: "",
      user_id: this.user._id
    };
  }

  onCancel(): void {
  }

  createNewApp(): void {
    let msg = "Por favor no dejes campos en blanco";
    let alert_type = "danger";
    if (this.newApp.name === ""
      || this.newApp.description === ""
      || this.newApp.bundle_id === "") {
      this.addAlert(alert_type, msg);
      return;
    }
    if (this.newApp.type === "mobile") {
      this.newApp.url = "";
      if (this.newApp.so === "") {
        this.addAlert(alert_type, msg);
        return;
      }
    } else {
      this.newApp.so = "";
      if (this.newApp.url === "") {
        this.addAlert(alert_type, msg);
        return;
      }
    }

    this.applicationsService.create(this.newApp, (result) => {
      console.log("new app result", result);
      if (result) {
        this.addAlert("success", "La aplicación fue creada exitosamente");
        this.initializeApp();
      } else {
        this.addAlert("danger", "Ocurrió un error al crear la aplicación. Por favor inténtalo nuevamente.");
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

  goBackToList():void {
    this.router.navigate(['/applications']);
  }

}

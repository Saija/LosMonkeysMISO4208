import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { CurrentUserService } from '../../services/current-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
    @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logOut(): void {
    console.log("trying to logout");
    this.currentUserService.clearData();
    this.router.navigate(['login']);
  }
}

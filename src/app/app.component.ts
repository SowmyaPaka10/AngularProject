/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}*/

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
showHeader: boolean = true;
showSidebar: boolean = true;
showFooter: boolean = true;

constructor(private router: Router) {}

ngOnInit() {
// Subscribe to router events to check the current route and hide/show layout components accordingly
this.router.events.subscribe((event) => {
if (event instanceof NavigationEnd) {
const currentRoute = this.router.url;
this.showHeader = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Hide header on the login page
this.showSidebar = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Hide sidebar on the login page
this.showFooter = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Always show the footer  true;
}
});
}
  ngAfterViewInit(): void {
    this.sidebar.sidebarToggled.subscribe(() =>{
      this.onToggleSidebar();
    });
    }
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  onToggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}

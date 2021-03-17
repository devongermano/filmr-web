import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isSidebarClosed = true;

  constructor() { }

  openSidebar() {
    this.isSidebarClosed = false;
  }

  closeSidebar() {
    this.isSidebarClosed = true;
  }
}

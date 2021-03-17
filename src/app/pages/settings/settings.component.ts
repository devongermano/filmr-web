import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PageHeaderType } from "../../common/page-header/page-header.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  PageHeaderType = PageHeaderType;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout().subscribe(() => {
    //   this.router.navigate(['/auth']);
    // });
  }

}

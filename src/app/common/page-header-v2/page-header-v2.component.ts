import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-header-v2',
  templateUrl: './page-header-v2.component.html',
  styleUrls: ['./page-header-v2.component.scss']
})
export class PageHeaderV2Component implements OnInit {

  @Input() showBackButton = false;

  constructor(public router: Router,
              public route: ActivatedRoute,
              public location: Location) { }

  ngOnInit(): void {
  }

}

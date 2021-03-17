import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input()
  type: PageHeaderType;

  @Input()
  title = "TITLE";

  @Output() onSaveEvent = new EventEmitter<string>();


  showCancelButton: boolean;
  showBackButton: boolean;

  showOptionsButton: boolean;
  showSaveButton: boolean;

  constructor(public router: Router, public route: ActivatedRoute, public location: Location) {
  }

  ngOnInit(): void {
    switch (this.type) {
      case PageHeaderType.Saveable:
        this.showSaveButton = true;
        this.showBackButton = true;
        break;
      case PageHeaderType.Options:
        this.showBackButton = true;
        this.showOptionsButton = true;
        break;
      case PageHeaderType.Back:
        this.showBackButton = true;
        break;
      case PageHeaderType.None:
        break;
    }
  }
}

export enum PageHeaderType {
  Back, Saveable, Options, None
}

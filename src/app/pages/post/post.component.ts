import { Component, OnInit } from '@angular/core';
import {PageHeaderType} from "../../common/page-header/page-header.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  pageHeaderType = PageHeaderType.None;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {PageHeaderType} from "../../common/page-header/page-header.component";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  pageHeaderType = PageHeaderType.Back;

  constructor() { }

  ngOnInit(): void {
  }

}

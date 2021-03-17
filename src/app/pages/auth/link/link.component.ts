import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  email: string = 'devon.m.germano@gmail.com';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onEmailLogin() {

  }

}

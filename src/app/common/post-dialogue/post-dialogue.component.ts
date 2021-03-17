import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-dialogue',
  templateUrl: './post-dialogue.component.html',
  styleUrls: ['./post-dialogue.component.scss']
})
export class PostDialogueComponent implements OnInit {

  idioms = [
    "What's cookin', good lookin'?",
    "What's the story, morning glory?",
    "What's the plan, Stan?",
    "What's shakin', bacon?",
    "What's the deal, banana peel?"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getRandomIdiom(): string {
    return this.idioms[Math.floor(Math.random() * this.idioms.length)];
  }

}

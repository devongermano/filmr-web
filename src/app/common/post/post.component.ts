import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleLike() {
    this.post.liked = !this.post.liked;
  }

}

export interface Post {
  username: string;
  likes: number;
  liked: boolean;
  description: string;
  imgSrc?: string;
  videoSrc?: string;
}

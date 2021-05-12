import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Post } from 'src/app/common/post/post.component';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollPosition = 0;

  posts: Post[] = [
    {
      username: 'devytheheavychevy',
      likes: 123,
      liked: true,
      description: 'This is a test post. Here is just some text about this picture. I like beans.',
      imgSrc: '../../assets/test-image-post.jpeg'
    },
    {
      username: 'justinthejock3x',
      likes: 21,
      liked: false,
      description: 'This is a test post. Here is just some text about this picture. I like beans.',
      imgSrc: '../../assets/test-image-post-1.jpeg'
    },
    {
      username: 'devytheheavychevy',
      likes: 4324,
      liked: true,
      description: 'This is a test post. Here is just some text about this picture. I like beans.',
      videoSrc: '../../assets/test-video-post.mov'
    }
  ];

  @HostListener('window:scroll', ['$event'])
      doSomething(event) {
        this.scrollPosition = window.pageYOffset;
      }

  constructor(public authService: AuthService, private userService: UserService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Croppie from 'croppie';
import {UserService} from "../../../services/user.service";
import {PageHeaderType} from "../../../common/page-header/page-header.component";


@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class CropImageComponent implements OnInit {


  @ViewChild('croppie') croppie: ElementRef;
  croppieObj; // global obj

  pageHeaderType = PageHeaderType.Saveable;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onFileChange(e: Event) {
    let file = (<HTMLInputElement>e.target).files[0];

    if (this.croppie && this.croppie.nativeElement.className === 'croppie-container') {
      this.croppieObj.destroy();
    }

    this.croppieObj = new Croppie(document.getElementById('croppie'), {
      viewport: {
        width: 200,
        height: 200,
        type: 'circle'
      },
      boundary: {
        width: 300,
        height: 300
      },
      enableExif: true,
    });

    let reader = new FileReader();


    reader.onload = (e1: any) => {
      this.croppieObj.bind(
        {
          url: e1.target.result,
        }
      );
    };

    reader.readAsDataURL(file);
  }

  save() {
    this.croppieObj.result({
      type: 'blob',
      circle: true
    }).then(something => {
      this.userService.updateUserPhoto(something);
    });
  }
}

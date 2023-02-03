import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = '';
  imageDefault = '../../../assets/images/carOne.jpg';

  @Output() emmitLoader = new EventEmitter<string>();

  imageError(){
    // console.log('Si esta llegando');
    this.img = this.imageDefault;
  }

  correctImage(){
    console.log('Image upload successfull');
    this.emmitLoader.emit(this.img);
  }
}

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];

  //imageSlider 如果在ng-if或者ng-for之下，就是false，否则就是true
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  constructor() {}

  ngOnInit() {}
}

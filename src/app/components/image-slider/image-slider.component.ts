import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  QueryList,
} from '@angular/core';

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
  @Input() sliderHeight: string = '160px';
  @Input() intervalBySeconds = 5;

  //ViewChild(ScrollableTabComponent)  可以直接选择组件
  //imageSlider 如果在ng-if或者ng-for之下，就是false，否则就是true
  //<img #img *ngFor="" />
  //@ViewChildren('IMG) images:QueryList<ElementRef>
  @ViewChild('imageSlider', { static: true })
  imgSlider: ElementRef;
  @ViewChild('img') images: QueryList<ElementRef>;
  selectedIndex: number = 0;
  timer = null;
  constructor(private rd2: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.timer = setInterval(() => {
      this.selectedIndex++;

      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
          this.sliders.length
      );
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx % this.sliders.length;
    // return idx >= 0
    //   ? idx % this.sliders.length
    //   : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    //scrollLeft 总共滚动多少 /  每张图片宽度
    const radio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(radio);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

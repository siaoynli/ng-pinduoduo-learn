import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 8;
  @Input() displayCols = 5;

  sliderMargin = '0';

  constructor() {}

  ngOnInit() {}

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto,max-content)`;
  }

  public get templateColumns(): string {
    //计算每一项的宽度，重复总列数
    return `repeat(${this.cols},calc((100vw)/${this.displayCols})`;
  }

  handleScroll(ev) {
    //滚动百分比
    this.sliderMargin = `0
    ${(100 * ev.target.scrollLeft) / ev.target.scrollWidth}%`;
  }
}

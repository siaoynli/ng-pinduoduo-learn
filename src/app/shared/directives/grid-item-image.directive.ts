/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:24:51
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-05 15:26:43
 * @Description:
 */

import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnInit,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {
  @HostBinding('style.grid-area') area = 'image';
  @HostBinding('style.width') @Input() itemWidth: string = '2rem';
  @HostBinding('style.height') height = this.itemWidth;
  @HostBinding('style.object-fit') @Input() fitModel: string = 'cover';

  //两个参数，事件名,参数
  @HostListener('click', ['$event.target'])
  handlerClick(ev) {
    console.log(ev);
  }
}

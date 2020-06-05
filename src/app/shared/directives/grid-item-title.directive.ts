/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:25:43
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-05 15:18:25
 * @Description:
 */

import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective {
  @HostBinding('style.grid-area') area = 'title';
  @HostBinding('style.font-size') @Input() itemTitle: string = '0.5rem';
}

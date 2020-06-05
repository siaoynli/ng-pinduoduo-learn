/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:11:23
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-05 15:07:20
 * @Description:
 */

import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding,
} from '@angular/core';

//指令
@Directive({
  selector: '[appGridItem]',
})
export class GridItemDirective {
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') place = 'center';
  @HostBinding('style.width') width = '4rem';

  /* constructor(private elr: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    this.rd2.setStyle(
      this.elr.nativeElement,
      'grid-template-areas',
      `'image' 'title'`
    );
    this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  } */
}

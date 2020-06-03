/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:11:23
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-03 15:59:07
 * @Description:
 */

import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

//指令
@Directive({
  selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit {
  constructor(private elr: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    this.rd2.setStyle(
      this.elr.nativeElement,
      'grid-template-areas',
      `'image' 'title'`
    );
    this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  }
}

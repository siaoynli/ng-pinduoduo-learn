/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:25:43
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-03 15:58:00
 * @Description:
 */

import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
  constructor(private elr: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  }
}

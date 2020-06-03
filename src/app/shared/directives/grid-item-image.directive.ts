/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-06-03 15:24:51
 * @LastEditors: lixiaoyun
 * @LastEditTime: 2020-06-03 16:08:01
 * @Description:
 */

import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit {
  @Input() itemWidth: string = '2rem';
  @Input() fitModel: string = 'cover';
  constructor(private elr: ElementRef, private rd2: Renderer2) {}

  ngOnInit(): void {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.itemWidth);
    this.rd2.setStyle(this.elr.nativeElement, 'height', this.itemWidth);
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitModel);
  }
}

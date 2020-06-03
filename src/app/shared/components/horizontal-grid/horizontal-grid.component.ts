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
  @Input() channels: Channel[] = [
    {
      id: 1,
      icon: './assets/images/01.png',
      title: '限时秒杀',
      link: '',
    },
    {
      id: 2,
      icon: './assets/images/02.png',
      title: '断码清仓',
      link: '',
    },
    {
      id: 3,
      icon: './assets/images/03.png',
      title: '品牌馆',
      link: '',
    },
    {
      id: 4,
      icon: './assets/images/04.png',
      title: '多多果园',
      link: '',
    },
    {
      id: 5,
      icon: './assets/images/05.png',
      title: '断码清仓',
      link: '',
    },
    {
      id: 6,
      icon: './assets/images/06.png',
      title: '断码清仓',
      link: '',
    },
    {
      id: 7,
      icon: './assets/images/07.png',
      title: '断码清仓',
      link: '',
    },
    {
      id: 8,
      icon: './assets/images/08.png',
      title: '断码清仓',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

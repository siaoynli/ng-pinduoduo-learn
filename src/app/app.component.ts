import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '拼多多';
  currentIndex: number = -1;
  menus: TopMenu[] = [
    { title: '热门', link: '' },
    { title: '男装', link: '' },
    { title: '百货', link: '' },
    { title: '运动', link: '' },
    { title: '手机', link: '' },
    { title: '家纺', link: '' },
    { title: '食品', link: '' },
    { title: '电视', link: '' },
    { title: '鞋包', link: '' },
    { title: '汽车', link: '' },
    { title: '水果', link: '' },
    { title: '电脑', link: '' },
    { title: '内衣', link: '' },
    { title: '家装', link: '' },
    { title: '母婴', link: '' },
    { title: '美妆', link: '' },
    { title: '家具', link: '' },
  ];

  handleSelection(index: number): void {
    this.currentIndex = index;
  }
}

import { Component } from '@angular/core';
import { TopMenu } from './components/scrollable-tab';
import { ImageSlider } from './components/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '拼多多';
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

  imageSliders: ImageSlider[] = [
    {
      imgUrl:
        'http://hzwphotos.hangzhou.com.cn/uploads/images/2020-04-22/9ea3438080b229b010efa3a82e9a0fed.jpeg',
      link: 'http://www.bilibili.com',
      caption: 'b站',
    },
    {
      imgUrl:
        'http://hzwphotos.hangzhou.com.cn/uploads/images/2020-03-03/59877fe0805ea130537b8a321f457cb0.jpg',
      link: 'http://www.bilibili.com',
      caption: 'b站2',
    },
  ];

  handleSelect(index: number) {
    console.log(this.menus[index]);
  }
}

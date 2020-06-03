import { Component } from '@angular/core';
import { TopMenu } from './shared/components/scrollable-tab';
import { ImageSlider } from './shared/components/image-slider';

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
    {
      imgUrl:
        'http://hzwphotos.hangzhou.com.cn/uploads/images/2020-04-22/4feadc90554541e8206d949ab564473c.jpg',
      link: 'http://www.bilibili.com',
      caption: 'b站3',
    },
    {
      imgUrl:
        'http://hzwphotos.hangzhou.com.cn/uploads/images/2020-05-26/sXnMOVtw7B3UcOm0SRC0rnYLrqyE3IPtjfkp6ZJA.jpeg',
      link: 'http://www.bilibili.com',
      caption: 'b站4',
    },
  ];

  handleSelect(index: number) {
    console.log(this.menus[index]);
  }
}

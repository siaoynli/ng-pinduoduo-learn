import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
})
export class HorizontalGridComponent implements OnInit {
  @Emoji() result = 'hello';

  constructor() {}

  ngOnInit() {}

  @Confirmable('您确认是点击了吗')
  handleClick() {
    console.log('我点击了');
  }
}

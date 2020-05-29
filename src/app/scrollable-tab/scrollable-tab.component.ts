import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
})
export class ScrollableTabComponent implements OnInit {
  currentIndex: number = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string = '#fff';
  @Input() defaultColor: string = '#666';
  @Input() activeColor: string = 'red';
  @Output() tabSelect = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSelection(index: number): void {
    this.currentIndex = index;
    this.tabSelect.emit(index);
  }
}

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
  constructor() {}

  ngOnInit(): void {}

  currentIndex: number = -1;
  @Input() menus: TopMenu[] = [];
  @Output() tabSelect = new EventEmitter();

  handleSelection(index: number): void {
    this.currentIndex = index;
    this.tabSelect.emit(index);
  }
}

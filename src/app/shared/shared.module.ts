import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridItemDirective } from './directives';
import { GridItemImageDirective } from './directives/grid-item-image.directive';
import { GridItemTitleDirective } from './directives/grid-item-title.directive';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
} from './components';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
  ],
})
export class SharedModule {}

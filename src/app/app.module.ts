import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components/scrollable-tab';
import { ImageSliderComponent } from './components/image-slider';

@NgModule({
  declarations: [AppComponent, ScrollableTabComponent, ImageSliderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

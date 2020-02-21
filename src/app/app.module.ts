import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoSliderModule } from './info-slider/info-slider.module';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfoSliderModule, CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

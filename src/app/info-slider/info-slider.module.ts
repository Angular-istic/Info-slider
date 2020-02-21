import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSliderComponent } from './info-slider.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [InfoSliderComponent],
  imports: [CommonModule, CdkStepperModule],
  exports: [InfoSliderComponent]
})
export class InfoSliderModule {}

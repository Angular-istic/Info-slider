import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'info-slider',
  templateUrl: './info-slider.component.html',
  styleUrls: ['./info-slider.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: InfoSliderComponent }]
})
export class InfoSliderComponent extends CdkStepper {
  @Input() header: string;
}

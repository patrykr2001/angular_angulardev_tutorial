import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocation} from "../housinglocation";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: ['./housing-location.component.scss'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
